import { useState, useEffect, Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import RatingStar from '../rating-star/rating-star-component'
import RootTopicMenu from '../topics/topic-component'
import { getCompanies, imgBuilder } from '../../utils/sanity/sanity-utils'

import './company-styles.css'
const Companies = () => {
  const [companies, setCompanies] = useState([])
  const [topics, setTopics] = useState([])
  useEffect(() => {
    const innerFunc = async () => {
      const rawCompaniesData = await getCompanies()

      setCompanies(rawCompaniesData)
    }
    innerFunc()
  }, [])

  return (
    <div>
      <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-10 gap-4 '>
        {companies.map(company => {
          return (
            <div
              key={company._id}
              className='relative company flex flex-col justify-center border-solid border-2 border-gray-300 rounded-lg'
            >
              <img
                className='rounded-lg '
                src={imgBuilder.image(company.image).size(92, 92).url()}
                alt=''
              />
              <div className='company-website absolute px-1 py-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-black bg-opacity-100 font-bold text-white text-1xl box-border'>
                <Link className='{company.url}'>{company.name}</Link>
                <RatingStar point={4.95} />
              </div>
            </div>
          )
        })}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-6 mt-3'>
        <div className='hidden md:block bg-gray-100 border border-solid border-gray-300 rounded-lg shadow-lg'></div>
        <div className='mx-1  sm:col-span-6 md:col-span-4 '>
          <RootTopicMenu />
          <Outlet />
        </div>
        <div className='hidden md:block bg-gray-100  border border-solid border-gray-300 rounded-lg shadow-lg'></div>
      </div>
    </div>
  )
  //   return <div></div>
}

export default Companies
