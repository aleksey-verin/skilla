import React, { useEffect, useRef, useState } from 'react'
import ImgClose from '../images/ImgClose'
import ImgSearch from '../images/ImgSearch'

const Search = ({ type = '', text = '' }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const formRef = useRef(null)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleInputValue = (e) => {
    setValue(e.target.value)
  }

  const clearInput = () => {
    setValue('')
    inputRef.current.focus()
  }

  const hideForm = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      inputRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    if (value) return
    document.addEventListener('mousedown', hideForm)
    return () => {
      document.removeEventListener('mousedown', hideForm)
    }
  }, [formRef, value])

  return (
    <div className="search-block">
      {open ? (
        <form ref={formRef} className={`search-open ${type}`}>
          <div className="search-open__pic">
            <ImgSearch />
          </div>
          <input
            ref={inputRef}
            onChange={handleInputValue}
            value={value}
            type="text"
            placeholder="Найти.."
          />
          {value ? (
            <div className="search-open__close" onClick={clearInput}>
              <ImgClose />
            </div>
          ) : null}
        </form>
      ) : (
        <div className={`search-hide ${type}`}>
          <div className="search-hide__pic" onClick={handleOpen}>
            <ImgSearch />
          </div>
          {text ? (
            <div className="search-hide__text" onClick={handleOpen}>
              {text}
            </div>
          ) : null}
        </div>
      )}

      {/* <div className={`search-hide ${type}`}>
        <ImgSearch />
        <div className="search-hide__text">{text}</div>
      </div> */}
    </div>
  )
}

export default Search
