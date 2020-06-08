import React from 'react'
import { Layout, Card, Row, Col} from 'antd';
import './books.css'

const {Content} = Layout;
const style = { padding: '8px 0' };




const yourBooks = (props) => {
  console.log('your book', props)
  return(
    <Layout className="layout">
      <Content>
        <h1 className="header">YOUR BOOK</h1>
          <div className="container">
            <div className = 'book'>
                  <Row gutter={14}>
                    <Col className="gutter-row" span={3}>
                      <div style={style}>เล่มที่</div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                      <div style={style}>ชื่อ</div>
                    </Col>
                    <Col className="gutter-row" span={10}>
                      <div style={style}>เนื้อหา</div>
                    </Col>
                    <Col className="gutter-row" span={4}>
                      <div style={style}>ผู้เขียน</div>
                    </Col>
                  </Row>
            </div>
            {props.books.length !== 0 ? (
                <div>
                  {props.books.map((book, index) => {
                    return (
                        <Card style ={{margin:'10px'}} 
                              className = 'bookCard' 
                              key = {index}
                              onClick = {() => {props.remove.removeBook(index)}}    
                              >
                          
                          <Row gutter={16}>
                            <Col className="gutter-row" span={2}>
                              <div style={style}>{index+1}</div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <div style={style}>{book.name}</div>
                            </Col>
                            <Col className="gutter-row" span={10}>
                              <div style={style}>{book.summary}</div>
                            </Col>
                            <Col className="gutter-row" span={4}>
                              <div style={style}>{book.whiter}</div>
                            </Col>
                            <Col className="gutter-row" span={2}>
                              <button className = 'bookBtn' >remove</button>
                            </Col>
                          </Row>
                        </Card>
                    )
                  })}
                </div>
            ):(<div className = 'warning'>NO BOOK IN YORE LIST</div>)}
          </div>
      </Content>
    </Layout>
  )
}
export default yourBooks;
