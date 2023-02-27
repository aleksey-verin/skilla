import React, { useEffect, useRef, useState } from 'react'
import fetchRequest from '../services/fetch'
import Loader from './commonUI/Loader'
import Filtering from './MainContent/Filtering'
import Info from './MainContent/Info'
import SpreadSheet from './MainContent/SpreadSheet'

const MainContent = () => {
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
  // debugger

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

  // useEffect(() => {
  //   if (!periodForRequest) return
  //   onRequestFirst(periodForRequest.date_start, periodForRequest.date_end, offset)
  // }, [periodForRequest])

  const getPeriodForRequest = (start, end) => {
    setPeriodForRequest({ date_start: start, date_end: end })
  }

  const getMoreData = () => {
    setOffset((offset) => offset + 50)
    // onRequestFirst(periodForRequest.date_start, periodForRequest.date_end, offset)
  }

  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement) {
        const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement
        if (scrollTop + clientHeight === scrollHeight && totalRows > offset + 50) {
          setOffset((offset) => offset + 50)
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  // ref={listInnerRef} onScroll={onScroll}

  return (
    <main>
      <Info loading={loading} getPeriodForRequest={getPeriodForRequest} />
      <Filtering />
      {/* <Loader /> */}
      <SpreadSheet data={data} loading={loading} />
      {/* {totalRows > offset + 50 ? (
        <button onClick={getMoreData} type='submit'>
          Click
        </button>
      ) : null} */}
    </main>
  )
}

export default MainContent
