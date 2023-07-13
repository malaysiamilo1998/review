import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const sntClient = createClient({
  projectId: 'hy20vg32',
  dataset: 'reviewhub',
  apiVersion: '2023-07-01',
  useCDN: true
})
export const imgBuilder = imageUrlBuilder(sntClient)
export const getCompanies = async () => {
  try {
    // "image": image.asset->url,
    return sntClient.fetch(
      `*[_type == "company"]{
                  _id,
                  _createdAt,
                  name,
                  "slug": slug.current,
                  image, 
                  url,
                  content
                }`
    )
  } catch (e) {
    // console.log('sanity error' + data)
  }
}

export const getTopics = async () => {
  try {
    return sntClient.fetch(
      `*[_type == "topic" && !defined(parentTopic)][0..5] | order(preference asc){
            _id,
            title,
            description,
            "slug": slug.current,
            image, 
      }`
    )
  } catch (e) {
    // console.log('sanity error' + data)
  }
}

export const getOtherTopics = async () => {
  try {
    return sntClient.fetch(
      `*[_type == "topic" && !defined(parentTopic)][6] | order(preference asc){
            _id,
            title,
            description,
            "slug": slug.current,
            image, 
      }`
    )
  } catch (e) {
    // console.log('sanity error' + data)
  }
}

export const getTopicsByParent = async parentSlug => {
  try {
    return sntClient.fetch(
      `*[_type == "topic" && parentTopic.slug == ${parentSlug}][0..5] | order(preference asc) {
              title,
              description,
              slug,
              image, 
        }`
    )
  } catch (e) {
    // console.log('sanity error' + data)
  }
}

export default sntClient
