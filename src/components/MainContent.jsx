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
  const [periodForRequest, setPeriodForRequest] = useState({
    date_start: '',
    date_end: '',
  })

  const onRequestFirst = async (start, end) => {
    setLoading(true)
    const result = await fetchRequest(start, end)
    setLoading(false)
    console.log(result)
    setTotalRows(Number(result.total_rows))
    setData(result.results)
  }
  useEffect(() => {
    if (!periodForRequest.date_start || !periodForRequest.date_end) return
    onRequestFirst(periodForRequest.date_start, periodForRequest.date_end)
  }, [periodForRequest])

  useEffect(() => {
    const onRequestNext = async (start, end, offset) => {
      if (!offset) return
      setLoading(true)
      const result = await fetchRequest(start, end, offset)
      setLoading(false)
      console.log(result)
      setTotalRows(Number(result.total_rows))
      setData([...data, ...result.results])
    }
    onRequestNext(periodForRequest.date_start, periodForRequest.date_end, offset)
  }, [offset])

  const getPeriodForRequest = (start, end) => {
    setPeriodForRequest({ date_start: start, date_end: end })
  }

  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement) {
        const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement
        if (scrollTop + clientHeight >= scrollHeight - 50 && totalRows > offset + 50) {
          if (loading) return
          setOffset((offset) => offset + 50)
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

  return (
    <main>
      <Info loading={loading} getPeriodForRequest={getPeriodForRequest} />
      <Filtering />
      <SpreadSheet data={data} loading={loading} />
    </main>
  )
}

export default MainContent
