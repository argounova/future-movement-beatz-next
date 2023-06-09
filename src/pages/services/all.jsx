import React from "react"
import ProductTemplate from "../../templates/product-template"
import Layout from "../../components/Layout"
import Head from "next/head"


const AllServices = (serviceInfo) => {
    serviceInfo = {
        headerImageAll: true,
        title: 'All Services Offered',
        introduction: 'Everything Future Movement Beatz can do for you',
        description: 'Description goes here.  This page will be reorganized slightly.',
        faqs: [
            {
                question: 'Service 1',
                answer: 'Link To Service 1',
            },
            {
                question: 'Service 2',
                answer: 'Link To Service 2',
            },
            {
                question: 'Service 3',
                answer: 'Link To Service 3',
            },
        ]
    }
  return (
    <>
      <Head>
        <title>All Services | Future Movement Beatz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logov2.png" />
      </Head>
      <Layout>
        <ProductTemplate
            {...serviceInfo}       
        />
      </Layout>
    </>
  )
}


export default AllServices