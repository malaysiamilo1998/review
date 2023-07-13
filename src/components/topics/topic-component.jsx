import { getTopics, imgBuilder } from '../../utils/sanity/sanity-utils'
import { useState, useEffect, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Navbar, Dropdown } from 'flowbite-react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'

const RootTopicMenu = () => {
  const [topics, setTopics] = useState([])
  // const [subTopics, setSubTopics] = useState([])
  const { slug } = useParams()
  // console.log('topic id: ' + topicId)
  // if (topicId != undefined) {

  // }

  useEffect(() => {
    const fetchTopics = async () => {
      const rootTopics = await getTopics()

      setTopics(rootTopics)
    }
    fetchTopics()
  }, [])
  return (
    <Fragment>
      <div className='border border-solid border-gray-300 rounded-lg flex flex-row justify-between p-2'>
        {/* <Navbar fluid rounded className='bg-transparent'>
          <div className='flex md:order-2'>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            {topics.map(element => {
              return (
                <Navbar.Link href={`/discussion/${element.slug}`}>
                  {element.title}
                </Navbar.Link>
              )
            })}
          </Navbar.Collapse>
        </Navbar> */}
        {topics.map(element => {
          // const linkStatus = slug == element.slug ? 'active' : ''
          return <Link to={`/discussion/${element.slug}`}>{element.title}</Link>
        })}
        {/* <OtherTopics />  */}
      </div>
    </Fragment>
  )
}

export default RootTopicMenu
