import { connect } from 'react-redux'
import Home from '../components/home'
//connect方法关联展示型组件
const HomePage= connect()(Home)

export default HomePage;