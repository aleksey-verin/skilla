import React, { useEffect, useRef, useState } from 'react'
import fetchRequest from '../services/fetch'
import Loader from './commonUI/Loader'
import Filtering from './MainContent/Filtering'
import Info from './MainContent/Info'
import SpreadSheet from './MainContent/SpreadSheet'

const MainContent = ({ getDataForHeader }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalRows, setTotalRows] = useState(null)
  const [offset, setOffset] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [periodForRequest, setPeriodForRequest] = useState({
    date_start: '',
    date_end: '',
  })

  const onRequestFirst = async (start, end, offset, search) => {
    const result = await fetchRequest(start, end, offset, search)
    setLoading(false)
    console.log(result)
    setTotalRows(Number(result.total_rows))
    setData(result.results)
  }
  useEffect(() => {
    if (!periodForRequest.date_start || !periodForRequest.date_end) return
    setLoading(true)
    onRequestFirst(periodForRequest.date_start, periodForRequest.date_end, offset, searchValue)
  }, [periodForRequest, searchValue])

  useEffect(() => {
    const onRequestNext = async (start, end, offset, search) => {
      if (!offset) return
      const result = await fetchRequest(start, end, offset, search)
      setLoading(false)
      console.log(result)
      setTotalRows(Number(result.total_rows))
      setData([...data, ...result.results])
    }
    setLoading(true)
    onRequestNext(periodForRequest.date_start, periodForRequest.date_end, offset, searchValue)
  }, [offset])

  const getPeriodForRequest = (start, end) => {
    setPeriodForRequest({ date_start: start, date_end: end })
  }

  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement) {
        const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement
        if (scrollTop + clientHeight >= scrollHeight - 50 && totalRows > offset + 50) {
          if (!loading) {
            setOffset(offset + 50)
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  useEffect(() => {
    if (!data) return
    const partnerName = data[0]?.partner_data.name
    if (!partnerName) return
    getDataForHeader(partnerName)
  }, [data])

  const clearOffset = () => {
    setOffset(0)
  }

  const getSearchValue = (value) => {
    setSearchValue(value)
  }

  return (
    <main>
      <Info loading={loading} getPeriodForRequest={getPeriodForRequest} clearOffset={clearOffset} />
      <Filtering getSearchValue={getSearchValue} />
      <SpreadSheet data={data} loading={loading} />
    </main>
  )
}

export default MainContent
