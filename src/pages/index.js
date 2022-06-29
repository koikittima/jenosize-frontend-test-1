import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import ChartLine from "../component/ChartLine";
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import { Button, Box, BoxCard } from '../assets/styles/globalStyles';
import CalendarForm from '../component/Calendar';
import Footer from '../component/Footer'

function Home(props) {
  const router = useRouter();
  const [tabReport, setTabReport] = useState("");
  const [tabList, setTabList] = useState("");
  const [type, setType] = useState("daily");

  const dataList = [
    {
      id: 1,
      name: "Ekarach Sripen",
      position: " Graphic Design",
      calendar: "Daily Report",
      like: "40",
      comment: "22",
      point: "200",
      diamond: "30",
    },

    {
      id: 2,
      name: "Dichapart  KornKang",
      position: "Creative",
      calendar: "Daily Report",
      like: "43",
      comment: "24",
      point: "300",
      diamond: "40",
    },
    {
      id: 3,
      name: "Asananda Ray",
      position: "HR",
      calendar: "Weekly Report",
      like: "30",
      comment: "24",
      point: "310",
      diamond: "40"
    },

    {
      id: 4,
      name: "Ekarach Sripen",
      position: " Graphic Design",
      calendar: "Daily Report",
      like: "50",
      comment: "15",
      point: "300",
      diamond: "50",
    },

    {
      id: 5,
      name: "Asananda Ray",
      position: " Graphic Design",
      calendar: "Daily Report",
      like: "25",
      comment: "10",
      point: "500",
      diamond: "50",
    },

    {
      id: 6,
      name: "Ekarach Sripen",
      position: " Graphic Design",
      calendar: "Daily Report",
      like: "43",
      comment: "20",
      point: "400",
      diamond: "55",
    },
    {
      id: 7,
      name: "Ekarach Sripen",
      position: " Graphic Design",
      calendar: "Daily Report",
      like: "56",
      comment: "40",
      point: "576",
      diamond: "60",
    },
  ]

  const dataListReportDate = [
    {
      like: "34",
      comment: "56",
      point: "450",
      diamond: "40",
    },
  ]

  const dataLikeWeek = [
    {
      totalName: "Total Like Weekly",
      date1: 40,
      date2: 30,
      date3: 50,
      date4: 60,
      date5: 50,
      date6: 55,
      date7: 80,
    },

  ]
  const [dataLike, setDataLike] = useState([])

  const dataCommentWeek = [
    {
      totalName: "Total Commen Weekly",
      date1: 35,
      date2: 45,
      date3: 36,
      date4: 55,
      date5: 78,
      date6: 35,
      date7: 60,
    },
  ]
  const [dataComment, setDataComment] = useState([])

  const dataPointWeek = [
    {
      totalName: "Total Pont Weekly",
      date1: 100,
      date2: 150,
      date3: 755,
      date4: 200,
      date5: 300,
      date6: 185,
      date7: 200,
    },
  ]
  const [dataPoint, setDataPoint] = useState([])

  const dataDiamondWeek = [
    {
      totalName: "Total Diamond Weekly",
      date1: 35,
      date2: 45,
      date3: 36,
      date4: 55,
      date5: 78,
      date6: 35,
      date7: 60,
    },
  ]
  const [dataDiamond, setDataDiamond] = useState([])

  useEffect(async () => {
    getLike()
    getComment()
    getPoint()
    getDiamond()
  }, [])

  const getLike = async () => {
    let listDataChart = []
    if (dataLikeWeek && dataLikeWeek.length > 0) {
      dataLikeWeek.map((item, i) => {
        listDataChart.push({
          label: item.totalName,
          data: [item.date1, item.date2, item.date3, item.date4, item.date5, item.date6, item.date7],
          fill: false,
          backgroundColor: '#3766FF',
          borderColor: '#3766FF',
          borderWidth: 2,
        })
      })
      setDataLike(listDataChart);
    }
  }

  const getComment = async () => {
    let listDataChart = []
    if (dataCommentWeek && dataCommentWeek.length > 0) {
      dataCommentWeek.map((item, i) => {
        listDataChart.push({
          label: item.totalName,
          data: [item.date1, item.date2, item.date3, item.date4, item.date5, item.date6, item.date7],
          fill: false,
          backgroundColor: '#3766FF',
          borderColor: '#3766FF',
          borderWidth: 2,
        })
      })
      setDataComment(listDataChart);
    }
  }

  const getPoint = async () => {
    let listDataChart = []
    if (dataPointWeek && dataPointWeek.length > 0) {
      dataPointWeek.map((item, i) => {
        listDataChart.push({
          label: item.totalName,
          data: [item.date1, item.date2, item.date3, item.date4, item.date5, item.date6, item.date7],
          fill: false,
          backgroundColor: '#3766FF',
          borderColor: '#3766FF',
          borderWidth: 2,
        })
      })
      setDataPoint(listDataChart);
    }
  }

  const getDiamond = async () => {
    let listDataChart = []
    if (dataDiamondWeek && dataDiamondWeek.length > 0) {
      dataDiamondWeek.map((item, i) => {
        listDataChart.push({
          label: item.totalName,
          data: [item.date1, item.date2, item.date3, item.date4, item.date5, item.date6, item.date7],
          fill: false,
          backgroundColor: '#3766FF',
          borderColor: '#3766FF',
          borderWidth: 2,
        })
      })
      setDataDiamond(listDataChart);
    }
  }

  const dataLineLike = {
    labels: ['10', '11', '12', '13', '14', '15', '16', ['Dec', '2019']],
    datasets: dataLike
  }

  const dataLineCommen = {
    labels: ['10', '11', '12', '13', '14', '15', '16', ['Dec', '2019']],
    datasets: dataComment
  }

  const dataLinePoint = {
    labels: ['10', '11', '12', '13', '14', '15', '16', ['Dec', '2019']],
    datasets: dataPoint
  }

  const dataLineDiamond = {
    labels: ['10', '11', '12', '13', '14', '15', '16', ['Dec', '2019']],
    datasets: dataDiamond
  }

  const renderBtn = () => {
    return (
      <Row className="d-flex justify-content-between mt-4">
        <Col lg={3} md={3} sm={3} xs={3} className="d-flex justify-content-center">
          <Button bg={tabReport === "report-like" || tabList === "list-like" ? "#3766FF" : "#fff"} color={tabReport === "report-like" || tabList === "list-like" ? "#fff" : "#3766FF"}
            shadow border_radius="50px" border="1px solid #3766FF" 
            onClick={() => {
              if (tabList) {
                setTabList("list-like")
              } else {
                setTabReport("report-like")
              }
            }}
          >
            <span className="d-flex align-items-center justify-content-center font12 px-1">
              <i className="fa fa-thumbs-up mr-1"></i>
              Like
            </span>
          </Button>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3} className="d-flex justify-content-center">
          <Button bg={tabReport === "report-comment" || tabList === "list-comment" ? "#3766FF" : "#fff"} color={tabReport === "report-comment" || tabList === "list-comment" ? "#fff" : "#3766FF"}
            shadow border_radius="50px" border=" 1px solid #3766FF" 
            onClick={() => {
              if (tabList) {
                setTabList("list-comment")
              } else {
                setTabReport("report-comment")
              }
            }}
          >
            <span className="d-flex align-items-center justify-content-center font12 px-1">
              <i className="fa fa-comment mr-1"></i>
              Comment
            </span>
          </Button>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3} className="d-flex justify-content-center">
          <Button bg={tabReport === "report-point" || tabList === "list-point" ? "#3766FF" : "#fff"} color={tabReport === "report-point" || tabList === "list-point" ? "#fff" : "#3766FF"}
            shadow border_radius="50px" border=" 1px solid #3766FF" 
            onClick={() => {
              if (tabList) {
                setTabList("list-point")
              } else {
                setTabReport("report-point")
              }
            }}
          >
            <span className="d-flex align-items-center justify-content-center font12 px-1">
              <i className="fa fa-gift mr-1"></i>
              Point
            </span>
          </Button>
        </Col>
        <Col lg={3} md={3} sm={3} xs={3} className="d-flex justify-content-center">
          <Button bg={tabReport === "report-diamond" || tabList === "list-diamond" ? "#3766FF" : "#fff"} color={tabReport === "report-diamond" || tabList === "list-diamond" ? "#fff" : "#3766FF"}
            shadow border_radius="50px" border=" 1px solid #3766FF"  className="mr-2"
            onClick={() => {
              if (tabList) {
                setTabList("list-diamond")
              } else {
                setTabReport("report-diamond")
              }
            }}
          >
            <span className="d-flex align-items-center justify-content-center font12 px-1">
              <i className="fas fa-gem mr-1"></i>
              Diamond
            </span>
          </Button>
        </Col>
      </Row>
    )
  }

  const renderChartLine = () => {
    return (
      <div>
        {tabReport === "report-like" ?
          <ChartLine labels={dataLineLike.labels} datasets={dataLineLike.datasets} />
          :
          tabReport === "report-comment" ?
            <ChartLine labels={dataLineCommen.labels} datasets={dataLineCommen.datasets} />
            :
            tabReport === "report-point" ?
              <ChartLine labels={dataLinePoint.labels} datasets={dataLinePoint.datasets} />
              :
              tabReport === "report-diamond" ?
                <ChartLine labels={dataLineDiamond.labels} datasets={dataLineDiamond.datasets} />
                :
                ""
        }
      </div>

    )
  }

  const renderListLike = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <div key={index} className='d-flex align-items-center justify-content-center mt-2 cursor-p' onClick={() => router.push(`/detail/${item.id}`)}>
          <div className='circle-blue text-white d-flex align-items-center justify-content-center mr-2'>
            <span className=''>{index + 1}</span>
          </div>
          <div className='w-100 '>
            <Box className='p-2'>
              <Row className=' '>
                <Col lg={9} md={9} sm={9} xs={8} className="d-flex align-items-center border-r" >
                  <i className="fa fa-user-circle gray-40 font30 mr-2"></i>
                  <div>
                    <p className='font10 mb-0 blod'>{item.name} {item.position}</p>
                    <p className='font10 mb-0'><i className="fas fa-calendar-alt mr-2"></i>{item.calendar}</p>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={4} className="d-flex align-items-center" >
                  <div className=' d-flex align-items-center justify-content-center'>
                    <i className="fa fa-thumbs-up mr-2 font12  blue-80"></i>
                    <p className='font10 mb-0  blod'>{item.like} Like</p>
                  </div>
                </Col>
              </Row>
            </Box>
          </div>

        </div>
      ))
    }
  }

  const renderListComment = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <div key={index} className=' d-flex align-items-center justify-content-center mt-2 cursor-p' onClick={() => router.push(`/detail/${item.id}`)}>
          <div className='circle-blue text-white d-flex align-items-center justify-content-center mr-2'>
            <span className=''>{index + 1}</span>
          </div>
          <div className='w-100 '>
            <Box className='p-2'>
              <Row className=' '>
                <Col lg={9} md={9} sm={9} xs={8} className="d-flex align-items-center border-r" >
                  <i className="fa fa-user-circle gray-40 font30 mr-2"></i>
                  <div>
                    <p className='font10 mb-0 blod'>{item.name} {item.position}</p>
                    <p className='font10 mb-0'><i className="fas fa-calendar-alt mr-2"></i>{item.calendar}</p>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={4} className="d-flex align-items-center" >
                  <div className=' d-flex align-items-center justify-content-center'>
                    <i className="fa fa-comment font12 mr-2 blue-80"></i>
                    <p className='font10 mb-0 blod'>{item.comment} Comment</p>
                  </div>
                </Col>
              </Row>
            </Box>
          </div>

        </div>
      ))
    }
  }

  const renderListPoint = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <div key={index} className=' d-flex align-items-center justify-content-center mt-2 cursor-p' onClick={() => router.push(`/detail/${item.id}`)}>
          <div className='circle-blue text-white d-flex align-items-center justify-content-center mr-2'>
            <span className=''>{index + 1}</span>
          </div>
          <div className='w-100 '>
            <Box className='p-2'>
              <Row className=' '>
                <Col lg={9} md={9} sm={9} xs={8} className="d-flex align-items-center border-r" >
                  <i className="fa fa-user-circle gray-40 font30 mr-2"></i>
                  <div>
                    <p className='font10 mb-0 blod'>{item.name} {item.position}</p>
                    <p className='font10 mb-0'><i className="fas fa-calendar-alt mr-2"></i>{item.calendar}</p>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={4} className="d-flex align-items-center" >
                  <div className=' d-flex align-items-center justify-content-center'>
                    <i className="fa fa-gift font12 mr-2 blue-80"></i>
                    <p className='font10 mb-0 blod'>{item.point} Point</p>
                  </div>
                </Col>
              </Row>
            </Box>
          </div>

        </div>
      ))
    }
  }

  const renderListDiamon = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <div key={index} className=' d-flex align-items-center justify-content-center mt-2 cursor-p' onClick={() => router.push(`/detail/${item.id}`)}>
          <div className='circle-blue text-white d-flex align-items-center justify-content-center mr-2'>
            <span className=''>{index + 1}</span>
          </div>
          <div className='w-100 '>
            <Box className='p-2'>
              <Row className=' '>
                <Col lg={9} md={9} sm={9} xs={8} className="d-flex align-items-center border-r" >
                  <i className="fa fa-user-circle gray-40 font30 mr-2"></i>
                  <div>
                    <p className='font10 mb-0 blod'>{item.name} {item.position}</p>
                    <p className='font10 mb-0'><i className="fas fa-calendar-alt mr-2"></i>{item.calendar}</p>
                  </div>
                </Col>
                <Col lg={3} md={3} sm={3} xs={4} className="d-flex align-items-center" >
                  <div className=' d-flex align-items-center justify-content-center'>
                    <i className="fas fa-gem font12 mr-2 blue-80"></i>
                    <p className='font10 mb-0 blod'>{item.diamond} Diamond</p>
                  </div>
                </Col>
              </Row>
            </Box>
          </div>

        </div>
      ))
    }
  }

  const renderReportDate = (data) => {
    if (data.length > 0) {
      return data.map((item, index) => (
        <div key={index}>
          <div className='d-flex align-items-center justify-content-between'>
            <span>10 December 2019</span>
            <img className="img-fluid" src="/images/svg/icon-share.svg" alt="img" />
          </div>

          <Row className='py-4'>
            <Col lg={6} md={6} sm={6} xs={6}>
              <BoxCard className='p-4'>
                <div className='d-flex align-items-center justify-content-center'>
                  <i className="fa fa-thumbs-up mr-2 text-blue"></i>
                  <span className='text-blue'>Like</span>
                </div>
                <div className='text-center'>
                  <span className='font30 blod'>{item.like}</span>
                </div>
                <div className='text-center'>
                  <span className='gray-70 blod'>Likes</span>
                </div>
              </BoxCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <BoxCard className='p-4'>
                <div className='d-flex align-items-center justify-content-center'>
                  <i className="fa fa-comment mr-2 text-blue"></i>
                  <span className='text-blue'>Comment</span>
                </div>
                <div className='text-center'>
                  <span className='font30 blod'>{item.comment}</span>
                </div>
                <div className='text-center'>
                  <span className='gray-70 blod'>Comment</span>
                </div>
              </BoxCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="mt-4">
              <BoxCard className='p-4'>
                <div className='d-flex align-items-center justify-content-center'>
                  <i className="fa fa-gift mr-2 text-blue"></i>
                  <span className='text-blue'>Point</span>
                </div>
                <div className='text-center'>
                  <span className='font30 blod'>{item.point}</span>
                </div>
                <div className='text-center'>
                  <span className='gray-70 blod'>Point</span>
                </div>
              </BoxCard>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="mt-4">
              <BoxCard className='p-4'>
                <div className='text-center'>
                  <i className="fas fa-gem  mr-2 text-blue"></i>
                  <span className='text-blue'>Diamond</span>
                </div>
                <div className='text-center'>
                  <span className='font30 blod'>{item.diamond}</span>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                  <span className='gray-70 blod'>Diamond</span>
                </div>
              </BoxCard>
            </Col>
          </Row>
        </div>
      ))
    }
  }

  return (
    <div >
      <Header title="Jenosize" description="Jenosize" keywords="Jenosize" />
      <section className="py-4 ">
        <section>
          <Container>
            <Row >
              <Col lg={6} md={6} sm={6} xs={6} className="d-flex align-items-center border-r" >
                <div className="w-100">
                  <div className="d-flex justify-content-center">
                    <span className='gray-60 blod'>Submissian</span>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} xs={6} className="d-flex align-items-center">
                <div className="w-100">
                  <div className="d-flex justify-content-center text-blue blod">
                    <span>Engagement</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className='border mt-4'></div>

        <section className="pt-4">
          <Container className="px-4" >
            <Row>
              <Col lg={6} md={6} sm={6} xs={6}>
                <div className='d-flex justify-content-between '>
                  <span className={`${type === "daily" ? "btn-active" : "gray-70"} mr-4 cursor-p`}
                    onClick={() => {
                      setType("daily")
                      setTabReport("")
                      setTabList("")
                    }}>
                    Daily</span>
                  <span className={`${type === "weekly" ? "btn-active" : "gray-70"} mr-4 cursor-p`}
                    onClick={() => {
                      if (tabList === "list-like") {
                        setTabReport("")
                        setType("weekly")
                      } else {
                        setType("weekly")
                        setTabReport("report-like")
                      }
                    }}> Weekly</span>
                  <span className={`${type === "monthly" ? "btn-active" : "gray-70"} cursor-p`}
                    onClick={() => {
                      if (tabList === "list-like") {
                        setTabReport("")
                        setType("monthly")
                      } else {
                        setType("monthly")
                        setTabReport("report-like")
                      }
                    }} > Monthly</span>
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} xs={6} >
                <div className="d-flex justify-content-end" >
                  <i className={`fas fa-chart-bar mr-4 cursor-p font30 ${tabReport || type === "daily" ? "blue-80" : "gray-40"}`}
                    onClick={() => {
                      setTabReport("report-like")
                      setTabList("")
                    }}
                  ></i>

                  <i className={`fa fa-list cursor-p font30 ${tabList ? "blue-80" : "gray-40"}`}
                    onClick={() => {
                      if (type === "daily") {
                        setType("weekly")
                        setTabList("list-like")
                      } else {
                        setTabList("list-like")
                        setTabReport("")
                      }
                    }}
                  >
                  </i>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <div className='border'></div>

        <section section className="py-4">
          <Container className="px-4">
            <div className='d-flex justify-content-between'>
              <CalendarForm />
              <div className='d-flex align-items-center'>
                <img className="img-fluid" src="/images/svg/icon-todate.svg" alt="" />
                <p className='font14 mb-0 blue-80 ml-2'>Today</p>
              </div>
            </div>
          </Container>
        </section>

        <div className='border'></div>

        {type === "daily" ?
          <section className="py-4">
            <Container className="px-4" >
              {renderReportDate(dataListReportDate)}
            </Container>
          </section>
          :
          <section className="py-4">
            <Container className="px-4" >
              <div className='d-flex align-items-center justify-content-between'>
                <span>10-16 December 2019</span>
                <img className="img-fluid" src="/images/svg/icon-share.svg" alt="img" />
              </div>
              {renderBtn()}
              {tabList &&
                <div className='py-4'>
                  {tabList === "list-like" ?
                    renderListLike(dataList)
                    :
                    tabList === "list-comment" ?
                      renderListComment(dataList)
                      :
                      tabList === "list-point" ?
                        renderListPoint(dataList)
                        :
                        renderListDiamon(dataList)
                  }
                </div>
              }
            </Container>
          </section>
        }

        <section className="py-4">
          <Container className="px-4" >
            {!tabList &&
              <div className=''>
                {renderChartLine()}
              </div>

            }
          </Container>
        </section>
        <section className="py-4"> </section>
      </section>
      <Footer />
    </div >
  )
}

export const getStaticProps = async () => {
  return {
    props: {
    },
  }
}

export default Home
