import React, { useEffect, useRef, useState } from 'react'
import fetchRequest from '../services/fetch'
import mockPersons from '../services/mockData'
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
  const [filterByInOutCalls, setFilterByInOutCalls] = useState('')
  const [filterByTypeCalls, setFilterByTypeCalls] = useState('')
  const [filterByEmployees, setFilterByEmployees] = useState('')
  const [employeesData, setEmployeesData] = useState([])
  const [filterBySource, setFilterBySource] = useState('')
  const [filterByErrors, setFilterByErrors] = useState('')

  const onRequestFirst = async (
    start,
    end,
    offset,
    search,
    inOut,
    from_type,
    person_id,
    source,
    errors
  ) => {
    const result = await fetchRequest(
      start,
      end,
      offset,
      search,
      inOut,
      from_type,
      person_id,
      source,
      errors
    )
    setLoading(false)
    console.log(result)
    setTotalRows(Number(result.total_rows))
    setData(result.results)
  }
  useEffect(() => {
    if (!periodForRequest.date_start || !periodForRequest.date_end) return
    setLoading(true)
    onRequestFirst(
      periodForRequest.date_start,
      periodForRequest.date_end,
      offset,
      searchValue,
      filterByInOutCalls,
      filterByTypeCalls,
      filterByEmployees,
      filterBySource,
      filterByErrors
    )
  }, [
    periodForRequest,
    searchValue,
    filterByInOutCalls,
    filterByTypeCalls,
    filterByEmployees,
    filterBySource,
    filterByErrors,
  ])

  useEffect(() => {
    const onRequestNext = async (
      start,
      end,
      offset,
      search,
      inOut,
      from_type,
      person_id,
      source,
      errors
    ) => {
      if (!offset) return
      const result = await fetchRequest(
        start,
        end,
        offset,
        search,
        inOut,
        from_type,
        person_id,
        source,
        errors
      )
      setLoading(false)
      console.log(result)
      setTotalRows(Number(result.total_rows))
      setData([...data, ...result.results])
    }
    setLoading(true)
    onRequestNext(
      periodForRequest.date_start,
      periodForRequest.date_end,
      offset,
      searchValue,
      filterByInOutCalls,
      filterByTypeCalls,
      filterByEmployees,
      filterBySource,
      filterByErrors
    )
  }, [
    offset,
    filterByInOutCalls,
    filterByTypeCalls,
    filterByEmployees,
    filterBySource,
    filterByErrors,
  ])

  const getPeriodForRequest = (start, end) => {
    setPeriodForRequest({ date_start: start, date_end: end })
    setOffset(0)
  }

  const getFilterByTypeCalls = (value) => {
    setFilterByTypeCalls(value)
    setOffset(0)
  }

  const getFilterByInOutCalls = (value) => {
    setFilterByInOutCalls(value)
    setOffset(0)
  }

  const getFilterByEmployees = (value) => {
    setFilterByEmployees(value)
    setOffset(0)
  }
  const getFilterBySource = (value) => {
    setFilterBySource(value)
    setOffset(0)
  }
  const getFilterByErrors = (value) => {
    setFilterByErrors(value)
    setOffset(0)
  }

  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement) {
        const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement
        if (scrollTop + clientHeight >= scrollHeight - 50 && totalRows > offset + 50) {
          if (!loading) {
            setOffset(() => offset + 50)
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
  //=================================
  useEffect(() => {
    const arrayUniqueById = [...new Map(data.map((item) => [item.person_id, item])).values()]
    const newArray = arrayUniqueById.map((item) => {
      return {
        // name: 'Входящие', request: '1'
        name: `${item.person_name} ${item.person_surname.slice(0, 1)}.`,
        request: item.person_id,
        id: item.person_id,
        person_name: item.person_name,
        person_surname: item.person_surname,
        person_avatar: item.person_avatar,
      }
    })
    const mockDataPersons = newArray.map((item, index) => {
      if (item.person_name === '**' && item.person_surname === '**') {
        item.person_name = mockPersons[index].person_name
        item.person_surname = mockPersons[index].person_surname
        item.name = `${item.person_name} ${item.person_surname.slice(0, 1)}.`
      }
      return item
    })
    setEmployeesData(mockDataPersons)
  }, [data])
  // console.log(arrayUniqueByKey)

  //===============================
  return (
    <main>
      <Info loading={loading} getPeriodForRequest={getPeriodForRequest} clearOffset={clearOffset} />
      <Filtering
        getSearchValue={getSearchValue}
        getFilterByInOutCalls={getFilterByInOutCalls}
        filterByInOutCalls={filterByInOutCalls}
        getFilterByTypeCalls={getFilterByTypeCalls}
        filterByTypeCalls={filterByTypeCalls}
        getFilterByEmployees={getFilterByEmployees}
        filterByEmployees={filterByEmployees}
        employeesData={employeesData}
        getFilterBySource={getFilterBySource}
        filterBySource={filterBySource}
        getFilterByErrors={getFilterByErrors}
        filterByErrors={filterByErrors}
      />
      <SpreadSheet data={data} loading={loading} />
    </main>
  )
}

export default MainContent
