import React from 'react';
import {
    Container,
    Row,
    Col,
    CardTitle,
    CardSubtitle,
    CardText,
    CardImg,
    Card,
    CardBody

} from 'reactstrap';
import Axios from 'axios';
import AppCard from '../../common/AppCard'
import {Link} from 'react-router-dom'

Axios.defaults.baseURL = 'https://binarplus-product-monggovest.herokuapp.com'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productTop: [],
           
        }
    }

    componentDidMount(){
        Axios
        .get('/product')
        .then(Ress => {
            this.setState({
                productTop: Ress.data
            })
        })
    }

    render() {

        // const card = this.state.productTop.slice(0, 4).map((p) => {

        //     return (
        //         <Col md='4' key={p.product_id}>
        //             <AppCard
        //                 image={p.foto}
        //                 title={p.nama_product}
        //                 harga={p.price}
        //             />
        //         </Col>
        //     )


        // })

        return (
            <div>
                <Container>
                <h1 style={{ textAlign: 'center' }} >Mudah Berinvestasi </h1>
                    <div className="row">
                    <div className="col-sm-3 col-12" style={{ textAlign: 'center' }}>
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQwcHgiIGhlaWdodD0iMjQwcHgiIHZpZXdCb3g9IjAgMCAyNDAgMjQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbi1pbnZlc3Q8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgcng9IjEyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeD0iLTI0IiB5PSItMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS0zIiB0cmFuc2Zvcm09InNjYWxlKDAuNSwwLjUpIj48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS0zIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUVHV2xEUTFCclEwZERiMnh2Y2xOd1lXTmxSMlZ1WlhKcFkxSkhRZ0FBT0kyTlZWMW9IRlVVUHJ0elp5TWt6bE5zTklWMHFEOE5KUTJUVmpTaHRMcC8zZDAyYnBaSk50b2k2R1QyN3M2WXljNDRNN3Y5b1U5RlVId3g2cHNVeEwrM2dDQW85US9iUHJRdmxRb2wydFFnS0Q2MCtJTlE2SXVtNjVrN001bHB1ckhlWmU1ODg1M3ZubnZ1dVdmdkJlaTVxbGlXa1JRQkZwcXVMUmN5NG5PSGo0ZzlLNUNFaDZBWEJxRlhVUjByWGFsTUFqWlBDM2UxVzk5RHdudGYyZFhkL3ArdHQwWWRGU0J4SDJLejVxZ0xpSThCOEtkVnkzWUJldnFSSHovcVdoNzJZdWkzTVVERUwzcTQ0V1BYdzNNK2ZvMXBadVFzNHRPSUJWVlRhb2lYRUkvTXhmaEdEUHN4c05aZm9FMXE2NnJvNWFKaW0zWGRvTEZ3NzJIK24yM0JhSVh6YmNPbno1bWZQb1R2WVZ6N0t6VWw1K0ZSeEV1cWtwOUcvQWppYTIxOXRoemcyNWFia1JFL0JwRGMzcHF2cGhIdlJGeXMyd2VxdnAra3JiV0tJWDduaERiekxPSXRpTTgzNThwVHdkaXJxcFBGbk1GMnhMYzFXdkx5T3dUQWlicGJtdkhIY3Z0dFU1N3k1K1hxTlpyTGUzbEUvUHE4ZVVqMmZYS2ZPZTNwZk9qemhKWXRCL3lsbDVTREZjU0RpSCtoUmtIMjUrTCtzZHhLRUFNWmFocmxTWDh1a3FNT1d5L2pYVzJtNk05TERCYzMxQjlMRnV2NmdWS2cvMFN6aTNLQXIxa0dxMUdNalUvYUxibnE2L2xSeGM0WGZKOThoVGFyZ1grK0RiTUpCU2lZTUllOUNrMVlBeEZrS0VBRzN4YllhS21ERGdZeUZLMFVHWXBmb1dZWEcrZkFQUEk2dEpuTndiN0NsUDdJeUYrRCtiak90Q3BraHo2Q0ZySWEvSTZzRnRObDhhdUZYR01UUDM0c053SS9KaGtnRXRtRHoxNHlTZmFSY1RJQklubUtQRTMya3h5eUUyVHYrdGhLYkVWZVBEZlcvYnlNTTFLbW0wWGRPYlM3b0dEL015cE1YRlBYckN3T3RvWWp5eW43QlYyOS9NWmZzVnpwTERkUnR1SVpuYnBYenZsZitldjhNdllyL0dxazRIL2tWL0czY3NkYXpMdXlUTVBzYkZoemQxVWFiUWJqRnZEUm1jV0p4UjN6Y2ZIa1Z3OUdmcGJKbWVldjlGMDhXVzh1RGthc2x3WDZhdmxXR1U2TlJLejBnL1NIdEN5OUozMG8vY2E5elgzS2ZjMTl6bjNCWFFLUk84dWQ0NzdoTG5BZmMxL0c5bXJ6R2xyZmV4WjVHTGRuNlpacnJFb2hJMndWSGhaeXdqYmhVV0V5OGljTUNHTkNVZGlCbHEzcit4YWZMNTQ5SFE1akgrYW4rMXkrTGxZQmlmdXhBdlJOL2xWVlZPbHdsQ2tkVm05Tk9MNUJFNHdrUTJTTWxEWlU5N2hYODZFaWxVL2xVbWtRVXp0VEU2bXgxRUVQaDdPbWRxQnRBdnY4SGRXcGJySlM2dEpqM24wQ1dkTTZidXNOelJWM1M5S1RZaHF2TmlxV211cm9pS2dZaHNoTWptaFRoOXB0V2hzRjc5NzBqL1NiTXJzUEUxc3VSNXo3RE1DK1AvSHMreTdpanJRQWxoeUFnY2NqYmhqUHlnZmVCVGp6aE5xeTI4RWRrVWg4QytEVTkrejJ2L295ZUg3OTFPbmN4SE9zNXkyQXRUYzduYi9mNzNUV1BrRC9xd0Jualg4Qm9KOThWUU5jQys4QUFBRkZTVVJCVkdnRjdkamJEWU13REFYUUJqRU1ZcXlxWTFXTXhUcHBMaUpJUUlBOGFyaVdrcDhJUHV3ZU82MGFtNjdyN01zdFk4d3dqdVBIN2RNejN1VXVhNjNwKy83cjlyZVBJUlcvOVFtUXpDVjl1YjBZZ1NJZ3poeHZRa2pGYjFFWkJBZEVLb2xrZkpUcXRuYjdidi96T0ptNThtb1JFMEF6WWdGb1Jhd0FHaEU3Z0RaRUVLQUpjUWpRZ2pnRmFFQmNBdGdSVVFCbVJEU0FGWkVFWUVRa0E5Z1FXUUFtUkRhQUJWRUVZRUFVQXg1SDRFYUdPeXcrU01sNjZtYlh6Tk9ENGs2Z0NQTlVZL0NGd0YxWU9uNXpSeEpKUklOcWFVYlV1WkEvNzlzZDN3bTN4SWRiZFM2MHJYem8yWFZDYk82MC9IeEtKZ0ZLS3Y0Q2tFeml1eUtCV0FFMEluWUFiWWdnUUJQaUVLQUZjUXJRZ0xnRXNDT2lBTXlJYUFBcklnbkFpRWdHc0NHeUFFeUliQUFMb2dqQWdDZ0dQSTdBWDl3NkYzSnRxSE1obk1XTEZTclNEOWpPbmFrVkhwWllBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwQTM1NjUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE3ODJEOSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJMYW5kaW5nLVBhZ2UtKExvZ2dlZC1PdXQpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjAwMDAwMCwgLTkwMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IlNlY3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA3MjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iU3RlcHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Mi4wMDAwMDAsIDE4MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbi1pbnZlc3QiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGwtb3BhY2l0eT0iMC4yIiBmaWxsPSJ1cmwoI3BhdHRlcm4tMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTA2LjY5MjIsMTA0LjI0OTQgQzEwNi42OTIyLDEzMy40NDg0IDEwNi42OTIyLDE2Mi4wODI0IDEwNi42OTIyLDE5MC43MTc0IEMxMDYuNjkyMiwxOTUuMDEyNCAxMDYuNzA0MiwxOTkuMzA4NCAxMDYuNjc5MiwyMDMuNjAzNCBDMTA2LjY0NjIsMjA5LjIwMzQgMTAzLjIwMDIsMjEzLjM5NzQgOTcuODcxMiwyMTQuMzcyNCBDOTIuOTI5MiwyMTUuMjc2NCA4OC4xNjQyLDIxMi40MzA0IDg2LjE3MTIsMjA3LjM4MzQgQzg2LjA1MjIsMjA3LjA4NDQgODUuOTMwMiwyMDYuNzg2NCA4NS43NTYyLDIwNi4zNTM0IEM4NC4yMjAyLDIxMS4xMTg0IDgxLjEyMjIsMjE0LjAwNzQgNzYuMjA5MiwyMTQuNDYzNCBDNzAuMDY4MiwyMTUuMDMzNCA2NC44OTAyLDIxMC4yNDk0IDY0Ljg3NjIsMjA0LjAwMzQgQzY0LjgyNzIsMTgxLjM1NTQgNjQuODQwMiwxNTguNzA4NCA2NC44ODUyLDEzNi4wNjA0IEM2NC44ODgyLDEzNC42NDc0IDY0LjYwMjIsMTMzLjkzNTQgNjMuMTY5MiwxMzMuMzY0NCBDNTkuMTU3MiwxMzEuNzY4NCA1Ny4xOTgyLDEyOC4zMTk0IDU1LjkyNzIsMTI0LjQ0MDQgQzU0LjQ5NjIsMTIwLjA3NDQgNTMuOTk0MiwxMTUuNTI4NCA1NC4wMDAyLDExMC45NzU0IEM1NC4wMTQyLDEwMC45NTU0IDU0LjEzMjIsOTAuOTMzNCA1NC40MDgyLDgwLjkxNjQgQzU0LjUyODIsNzYuNTc0NCA1NS4wNjMyLDcyLjI0MTQgNTYuNTk4Miw2OC4wOTQ0IEM1OC40MjAyLDYzLjE2OTQgNjEuODM3Miw2MC40OTc0IDY3LjEzMTIsNjAuMzA0NCBDNzguNzgxMiw1OS44Nzk0IDkwLjQyOTIsNjAuMjM4NCAxMDIuMDcyMiw2MC41MjU0IEMxMDYuNjE4Miw2MC42Mzc0IDEwOS4zODYyLDYzLjYzMDQgMTEwLjc4ODIsNjcuNzczNCBDMTE0LjAzMzIsNzcuMzYyNCAxMTcuMjA4Miw4Ni45NzY0IDEyMC4zMjgyLDk2LjYwNTQgQzEyMC43NzEyLDk3Ljk3MDQgMTIxLjI3ODIsOTguNTMyNCAxMjIuODI0Miw5OC41MjI0IEMxMzQuNTM4Miw5OC40NDk0IDE0Ni4yNTMyLDk4LjQ3NjQgMTU3Ljk2NzIsOTguNDk4NCBDMTYzLjEwNzIsOTguNTA3NCAxNjYuMTYzMiwxMDIuODg5NCAxNjQuNDU2MiwxMDcuNzM3NCBDMTYzLjU0NTIsMTEwLjMyNTQgMTYxLjMyMjIsMTExLjg0MzQgMTU4LjI1MDIsMTExLjg1MjQgQzE0OS4xMzkyLDExMS44Nzg0IDE0MC4wMjcyLDExMS44NzA0IDEzMC45MTcyLDExMS44NzI0IEMxMjYuNjIxMiwxMTEuODczNCAxMjIuMzE3MiwxMTEuNjk2NCAxMTguMDMzMiwxMTEuOTEwNCBDMTEzLjIwNzIsMTEyLjE1MTQgMTA5Ljk2NTIsMTEwLjAyNTQgMTA3Ljc1MDIsMTA1Ljk0MzQgQzEwNy41MTUyLDEwNS41MTA0IDEwNy4yMjgyLDEwNS4xMDQ0IDEwNi42OTIyLDEwNC4yNDk0IFogTTEwMS4zMzk2LDQyLjc1NTMgQzEwMS4yNTU2LDUxLjY1OTMgOTQuMzMyNiw1OC4zNTUzIDg1LjI4NTYsNTguMjgzMyBDNzYuODk5Niw1OC4yMTYzIDcwLjAwNTYsNTEuMDY0MyA3MC4wNDI2LDQyLjQ2ODMgQzcwLjA3OTYsMzMuOTQyMyA3Ny4yNjA2LDI2LjkxOTMgODUuODYwNiwyNy4wMDAzIEM5NC41MDg2LDI3LjA4MjMgMTAxLjQyMTYsMzQuMTE3MyAxMDEuMzM5Niw0Mi43NTUzIFogTTE0OC4yMTU2LDc5LjY4NzQgQzE1NS40MzY2LDc5LjY4NzQgMTYyLjY1NjYsNzkuNjg2NCAxNjkuODc3Niw3OS42ODg0IEMxNzAuODQwNiw3OS42ODk0IDE3MS44NjM2LDc5LjUyMDQgMTcyLjM3NTYsODAuNjk4NCBDMTcyLjg3NDYsODEuODUxNCAxNzIuMTQ1Niw4Mi41MjE0IDE3MS40NjQ2LDgzLjIzMzQgQzE2Ny43ODA2LDg3LjA5MTQgMTY0LjA4NDYsOTAuOTM3NCAxNjAuNDI5Niw5NC44MjI0IEMxNTkuNjEzNiw5NS42ODk0IDE1OC43MzY2LDk2LjA5NDQgMTU3LjUyNzYsOTYuMDg2NCBDMTUxLjI4MjYsOTYuMDQ2NCAxNDUuMDM3Niw5Ni4wNTY0IDEzOC43OTI2LDk2LjA5MDQgQzEzNy42MTU2LDk2LjA5NjQgMTM2LjY4NTYsOTUuODA3NCAxMzUuODQ4Niw5NC45MTY0IEMxMzIuMTA3Niw5MC45MzU0IDEyOC4zMTk2LDg2Ljk5NzQgMTI0LjUzNzYsODMuMDU0NCBDMTIzLjg3MjYsODIuMzYwNCAxMjMuMzQ0Niw4MS42NjQ0IDEyMy44MjI2LDgwLjY0NDQgQzEyNC4yNjM2LDc5LjcwNDQgMTI1LjA5MDYsNzkuNjcyNCAxMjUuOTY4Niw3OS42NzM0IEMxMzMuMzgzNiw3OS42ODI0IDE0MC43OTk2LDc5LjY3ODQgMTQ4LjIxNTYsNzkuNjc4NCBMMTQ4LjIxNTYsNzkuNjg3NCBaIE0xNjcuMjgyNSwxMTUuMjQzOSBDMTgwLjU3MjUsMTIyLjgwODkgMTg4LjI0NTUsMTM5LjIyMDkgMTg1LjQzNjUsMTU0LjEyNTkgQzE4Mi4zMzQ1LDE3MC41ODI5IDE2OS43Mjc1LDE4My4wMDg5IDE1My44NzQ1LDE4NS4yMzU5IEMxMzMuODY5NSwxODguMDQ2OSAxMTUuOTU3NSwxNzUuOTIxOSAxMTEuMTg5NSwxNTYuMzQxOSBDMTA3LjM1MDUsMTQwLjU3NzkgMTE0Ljg0NzUsMTIzLjI0NjkgMTI4Ljk1NjUsMTE1LjIwNTkgQzEyOS44NDI1LDExNC43MDE5IDEzMC43MjA1LDExNC40OTY5IDEzMS43Mjc1LDExNC41MDE5IEMxMzcuMTkyNSwxMTQuNTMwOSAxNDIuNjU3NSwxMTQuNTE1OSAxNDguMTIyNSwxMTQuNTE1OSBDMTUzLjUyMjUsMTE0LjUxNTkgMTU4LjkyMTUsMTE0LjUzMzkgMTY0LjMyMTUsMTE0LjUwMDkgQzE2NS4zOTU1LDExNC40OTQ5IDE2Ni4zNDE1LDExNC43MDY5IDE2Ny4yODI1LDExNS4yNDM5IFogTTE0Ni40MDEyLDE0Ni4wMjE5IEMxNDIuOTc3MiwxNDUuMDY0OSAxNDEuMjMyMiwxNDMuMzUxOSAxNDEuMTI4MiwxNDEuMDMwOSBDMTQxLjAyMjIsMTM4LjY3MzkgMTQyLjU1NzIsMTM2LjM1MDkgMTQ0LjgzMTIsMTM1LjMzNjkgQzE0NS45MjQyLDEzNC44NDg5IDE0Ni40NjEyLDEzNC45MDA5IDE0Ni40MjUyLDEzNi4zMzg5IEMxNDYuMzQ3MiwxMzkuNTEyOSAxNDYuNDAxMiwxNDIuNjg4OSAxNDYuNDAxMiwxNDYuMDIxOSBaIE0xNDkuNzk0MiwxNTkuNzg3NSBDMTQ5Ljc5NDIsMTU4LjI5NDUgMTQ5LjgxNTIsMTU2LjgwMjUgMTQ5Ljc4NzIsMTU1LjMxMDUgQzE0OS43NjkyLDE1NC4zNjM1IDE1MC4wOTgyLDE1NC4yNDA1IDE1MC45NjUyLDE1NC41NDg1IEMxNTMuMzI2MiwxNTUuMzg1NSAxNTQuODM5MiwxNTcuMTY4NSAxNTQuODg1MiwxNTkuMzQzNSBDMTU0LjkzODIsMTYxLjg2OTUgMTUzLjI5ODIsMTY0LjE1MDUgMTUwLjkyNTIsMTY1LjAyNjUgQzE1MC4wNDYyLDE2NS4zNTA1IDE0OS43NDcyLDE2NS4yMDg1IDE0OS43NjkyLDE2NC4yNjQ1IEMxNDkuODA1MiwxNjIuNzcyNSAxNDkuNzc5MiwxNjEuMjc5NSAxNDkuNzc5MiwxNTkuNzg3NSBMMTQ5Ljc5NDIsMTU5Ljc4NzUgWiBNMTYyLjc2MTUsMTYwLjc2OTkgQzE2My43MzQ1LDE1NS43MzE5IDE2MS4zMjU1LDE1MS4zOTQ5IDE1Ni41MDA1LDE0OS42MDM5IEMxNTQuNjc2NSwxNDguOTI3OSAxNTIuODE1NSwxNDguMzQ0OSAxNTAuOTU0NSwxNDcuNzc0OSBDMTUwLjI2MzUsMTQ3LjU2MjkgMTQ5Ljc5MjUsMTQ3LjMyMDkgMTQ5Ljc5NzUsMTQ2LjQ4MTkgQzE0OS44MjE1LDE0Mi43OTI5IDE0OS44MDc1LDEzOS4xMDI5IDE0OS44MDc1LDEzNS4wODU5IEMxNTEuOTYyNSwxMzYuMTE0OSAxNTMuMjE5NSwxMzcuNDM1OSAxNTMuOTMyNSwxMzkuMjc4OSBDMTU0LjM3NjUsMTQwLjQyNzkgMTU0LjcyNDUsMTQxLjYyNTkgMTU1LjI4NjUsMTQyLjcxMzkgQzE1Ni4wNTU1LDE0NC4yMDI5IDE1Ny4yOTI1LDE0NS4xNjU5IDE1OS4wNzA1LDE0NC45MDQ5IEMxNjAuOTA2NSwxNDQuNjM0OSAxNjIuMTQ1NSwxNDMuNTgyOSAxNjIuNTUzNSwxNDEuNzAxOSBDMTYyLjczMjUsMTQwLjg3MjkgMTYyLjgxNTUsMTQwLjA0MjkgMTYyLjY1NDUsMTM5LjE4NjkgQzE2MS41ODU1LDEzMy41MDE5IDE1Ny43NDc1LDEzMC40NDU5IDE1Mi41Mjg1LDEyOS4wNjE5IEMxNTAuNTM2NSwxMjguNTMzOSAxNDkuNDIwNSwxMjguMDYwOSAxNDkuNzM5NSwxMjUuNzk3OSBDMTQ5Ljg4NjUsMTI0Ljc1MjkgMTQ5LjE0MzUsMTI0LjA0NDkgMTQ4LjA4NTUsMTI0LjA0NjkgQzE0Ny4wNDM1LDEyNC4wNDk5IDE0Ni40MjU1LDEyNC42OTE5IDE0Ni4zODY1LDEyNS43ODU5IEMxNDYuMzc2NSwxMjYuMDQ1OSAxNDYuMzQ4NSwxMjYuMzEwOSAxNDYuMzgzNSwxMjYuNTY1OSBDMTQ2LjU2MjUsMTI3Ljg3MTkgMTQ2LjIxOTUsMTI4LjQzMTkgMTQ0LjY5ODUsMTI4LjY1OTkgQzEzOC43NTE1LDEyOS41NTQ5IDEzNC42MTM1LDEzMy42MDU5IDEzMy40NTM1LDEzOS4zMzI5IEMxMzIuMzY2NSwxNDQuNzAzOSAxMzQuNjczNSwxNDguODk5OSAxMzkuNzg5NSwxNTAuNzYzOSBDMTQxLjQ5NTUsMTUxLjM4NTkgMTQzLjIyNjUsMTUxLjk0NzkgMTQ0Ljk3NDUsMTUyLjQzNTkgQzE0Ni4wMDU1LDE1Mi43MjM5IDE0Ni40NTA1LDE1My4xNzk5IDE0Ni40MDU1LDE1NC4zMjg5IEMxNDYuMzA4NSwxNTYuNzk2OSAxNDYuNDI5NSwxNTkuMjczOSAxNDYuMzUyNSwxNjEuNzQ0OSBDMTQ2LjMyMDUsMTYyLjc5NjkgMTQ2LjkwNzUsMTY0LjUyMTkgMTQ1Ljk3ODUsMTY0Ljc2MDkgQzE0NC43NjM1LDE2NS4wNzM5IDE0My43MTU1LDE2My42ODE5IDE0My4wMTc1LDE2Mi41ODk5IEMxNDIuMzk2NSwxNjEuNjE3OSAxNDIuMDEwNSwxNjAuNDkzOSAxNDEuNTM4NSwxNTkuNDI4OSBDMTQxLjIyMzUsMTU4LjcxODkgMTQxLjAxODUsMTU3Ljk0ODkgMTQwLjYyNzUsMTU3LjI4NjkgQzEzOS44NDc1LDE1NS45NjI5IDEzOC43MDE1LDE1NS4xODU5IDEzNy4wODQ1LDE1NS4zNjA5IEMxMzUuNDQ5NSwxNTUuNTM2OSAxMzQuMjgwNSwxNTYuNDAwOSAxMzMuNjkzNSwxNTcuOTIwOSBDMTMzLjI2ODUsMTU5LjAyMTkgMTMzLjIwMDUsMTYwLjE3NzkgMTMzLjQzNzUsMTYxLjM3MzkgQzEzNC40MTU1LDE2Ni4zMTI5IDEzOC42OTc1LDE3MC40MjE5IDE0NC40MDA1LDE3MS40MTM5IEMxNDYuMTM3NSwxNzEuNzE1OSAxNDYuNTQyNSwxNzIuMzYyOSAxNDYuNDAwNSwxNzMuOTEzOSBDMTQ2LjI4OTUsMTc1LjEyMzkgMTQ2LjY2ODUsMTc2LjIyNzkgMTQ4LjE0MjUsMTc2LjE4MjkgQzE0OS42MTI1LDE3Ni4xMzc5IDE0OS45MzI1LDE3NC45OTE5IDE0OS43NzU1LDE3My44MDY5IEMxNDkuNTYzNSwxNzIuMjA1OSAxNTAuMjMyNSwxNzEuNzQxOSAxNTEuNzQ4NSwxNzEuNDg1OSBDMTU3LjQ3NTUsMTcwLjUxOTkgMTYxLjY4NzUsMTY2LjMyODkgMTYyLjc2MTUsMTYwLjc2OTkgWiIgaWQ9IkludmVzdCIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC01KSIgbWFzaz0idXJsKCNtYXNrLTQpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" alt="" />
                            <br />
                            <p className='mt-4'>Pilih Instrumen Investasi</p>
                        </div>
                        <div className="col-sm-3 col-12" style={{ textAlign: 'center' }}>
                            <img src="http://monggovest.herokuapp.com/static/img/icon-pay.6cb145d.svg" alt="" />
                            <br />
                            <p className='mt-4'>Lakukan Pembayaran</p>
                        </div>
                        <div className="col-sm-3 col-12" style={{ textAlign: 'center' }}>
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQwcHgiIGhlaWdodD0iMjQwcHgiIHZpZXdCb3g9IjAgMCAyNDAgMjQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbi1jb3c8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgcng9IjEyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeD0iLTI0IiB5PSItMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS0zIiB0cmFuc2Zvcm09InNjYWxlKDAuNSwwLjUpIj48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS0zIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUVHV2xEUTFCclEwZERiMnh2Y2xOd1lXTmxSMlZ1WlhKcFkxSkhRZ0FBT0kyTlZWMW9IRlVVUHJ0elp5TWt6bE5zTklWMHFEOE5KUTJUVmpTaHRMcC8zZDAyYnBaSk50b2k2R1QyN3M2WXljNDRNN3Y5b1U5RlVId3g2cHNVeEwrM2dDQW85US9iUHJRdmxRb2wydFFnS0Q2MCtJTlE2SXVtNjVrN001bHB1ckhlWmU1ODg1M3ZubnZ1dVdmdkJlaTVxbGlXa1JRQkZwcXVMUmN5NG5PSGo0ZzlLNUNFaDZBWEJxRlhVUjByWGFsTUFqWlBDM2UxVzk5RHdudGYyZFhkL3ArdHQwWWRGU0J4SDJLejVxZ0xpSThCOEtkVnkzWUJldnFSSHovcVdoNzJZdWkzTVVERUwzcTQ0V1BYdzNNK2ZvMXBadVFzNHRPSUJWVlRhb2lYRUkvTXhmaEdEUHN4c05aZm9FMXE2NnJvNWFKaW0zWGRvTEZ3NzJIK24yM0JhSVh6YmNPbno1bWZQb1R2WVZ6N0t6VWw1K0ZSeEV1cWtwOUcvQWppYTIxOXRoemcyNWFia1JFL0JwRGMzcHF2cGhIdlJGeXMyd2VxdnAra3JiV0tJWDduaERiekxPSXRpTTgzNThwVHdkaXJxcFBGbk1GMnhMYzFXdkx5T3dUQWlicGJtdkhIY3Z0dFU1N3k1K1hxTlpyTGUzbEUvUHE4ZVVqMmZYS2ZPZTNwZk9qemhKWXRCL3lsbDVTREZjU0RpSCtoUmtIMjUrTCtzZHhLRUFNWmFocmxTWDh1a3FNT1d5L2pYVzJtNk05TERCYzMxQjlMRnV2NmdWS2cvMFN6aTNLQXIxa0dxMUdNalUvYUxibnE2L2xSeGM0WGZKOThoVGFyZ1grK0RiTUpCU2lZTUllOUNrMVlBeEZrS0VBRzN4YllhS21ERGdZeUZLMFVHWXBmb1dZWEcrZkFQUEk2dEpuTndiN0NsUDdJeUYrRCtiak90Q3BraHo2Q0ZySWEvSTZzRnRObDhhdUZYR01UUDM0c053SS9KaGtnRXRtRHoxNHlTZmFSY1RJQklubUtQRTMya3h5eUUyVHYrdGhLYkVWZVBEZlcvYnlNTTFLbW0wWGRPYlM3b0dEL015cE1YRlBYckN3T3RvWWp5eW43QlYyOS9NWmZzVnpwTERkUnR1SVpuYnBYenZsZitldjhNdllyL0dxazRIL2tWL0czY3NkYXpMdXlUTVBzYkZoemQxVWFiUWJqRnZEUm1jV0p4UjN6Y2ZIa1Z3OUdmcGJKbWVldjlGMDhXVzh1RGthc2x3WDZhdmxXR1U2TlJLejBnL1NIdEN5OUozMG8vY2E5elgzS2ZjMTl6bjNCWFFLUk84dWQ0NzdoTG5BZmMxL0c5bXJ6R2xyZmV4WjVHTGRuNlpacnJFb2hJMndWSGhaeXdqYmhVV0V5OGljTUNHTkNVZGlCbHEzcit4YWZMNTQ5SFE1akgrYW4rMXkrTGxZQmlmdXhBdlJOL2xWVlZPbHdsQ2tkVm05Tk9MNUJFNHdrUTJTTWxEWlU5N2hYODZFaWxVL2xVbWtRVXp0VEU2bXgxRUVQaDdPbWRxQnRBdnY4SGRXcGJySlM2dEpqM24wQ1dkTTZidXNOelJWM1M5S1RZaHF2TmlxV211cm9pS2dZaHNoTWptaFRoOXB0V2hzRjc5NzBqL1NiTXJzUEUxc3VSNXo3RE1DK1AvSHMreTdpanJRQWxoeUFnY2NqYmhqUHlnZmVCVGp6aE5xeTI4RWRrVWg4QytEVTkrejJ2L295ZUg3OTFPbmN4SE9zNXkyQXRUYzduYi9mNzNUV1BrRC9xd0Jualg4Qm9KOThWUU5jQys4QUFBRkZTVVJCVkdnRjdkamJEWU13REFYUUJqRU1ZcXlxWTFXTXhUcHBMaUpJUUlBOGFyaVdrcDhJUHV3ZU82MGFtNjdyN01zdFk4d3dqdVBIN2RNejN1VXVhNjNwKy83cjlyZVBJUlcvOVFtUXpDVjl1YjBZZ1NJZ3poeHZRa2pGYjFFWkJBZEVLb2xrZkpUcXRuYjdidi96T0ptNThtb1JFMEF6WWdGb1Jhd0FHaEU3Z0RaRUVLQUpjUWpRZ2pnRmFFQmNBdGdSVVFCbVJEU0FGWkVFWUVRa0E5Z1FXUUFtUkRhQUJWRUVZRUFVQXg1SDRFYUdPeXcrU01sNjZtYlh6Tk9ENGs2Z0NQTlVZL0NGd0YxWU9uNXpSeEpKUklOcWFVYlV1WkEvNzlzZDN3bTN4SWRiZFM2MHJYem8yWFZDYk82MC9IeEtKZ0ZLS3Y0Q2tFeml1eUtCV0FFMEluWUFiWWdnUUJQaUVLQUZjUXJRZ0xnRXNDT2lBTXlJYUFBcklnbkFpRWdHc0NHeUFFeUliQUFMb2dqQWdDZ0dQSTdBWDl3NkYzSnRxSE1obk1XTEZTclNEOWpPbmFrVkhwWllBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwQTM1NjUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE3ODJEOSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJMYW5kaW5nLVBhZ2UtKExvZ2dlZC1PdXQpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzQzLjAwMDAwMCwgLTkwMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IlNlY3Rpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA3MjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iU3RlcHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Mi4wMDAwMDAsIDE4MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbi1jb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3MS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbC1vcGFjaXR5PSIwLjIiIGZpbGw9InVybCgjcGF0dGVybi0yKSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjAuMTUxOSw3My44NDczIEMxNTMuNzc5OSw3Mi40ODAzIDE1MC45NjY5LDY4LjM4OTMgMTUwLjQ0MTksNjIuMDkzMyBDMTU1LjUyMTksNjMuNDc5MyAxNjAuMzIwOSw2NC45MjEzIDE2NC42NjQ5LDY3LjgyNDMgQzE2My4xOTk5LDY0LjQ3OTMgMTYxLjQ2NzksNjEuMjk3MyAxNjIuMzMyOSw1Ni45OTkzIEMxNjQuODE4OSw2MC40NDczIDE2NS44MTg5LDY0LjQ3NTMgMTY5Ljc5NDksNjUuOTI1MyBDMTcwLjMwOTksNjUuMDIzMyAxNjkuNTUyOSw2My45MTQzIDE3MC43MDM5LDYyLjk0MzMgQzE3MS44MTA5LDY2LjA3MDMgMTc0LjQ4NTksNjYuOTgyMyAxNzcuMjIzOSw2Ny45MTUzIEMxNzkuNzE1OSw2OC43NjYzIDE4MS42Mjc5LDcwLjI1MTMgMTgzLjExMDksNzIuNjUwMyBDMTg2LjI5MDksNzcuNzkzMyAxOTAuNjg0OSw4MS44MjgzIDE5NS44OTM5LDg0Ljk1MjMgQzE5Ny4wNDc5LDg1LjY0NDMgMTk4LjEyOTksODYuNDYxMyAxOTkuMjA0OSw4Ny4yNzQzIEMyMDMuMTExOSw5MC4yMjczIDIwMy4zMTA5LDkyLjI2NjMgMjAwLjA3MzksOTUuOTQwMyBDMTk5LjMxMDksOTYuODA3MyAxOTguNTQ2OSw5Ny42NzIzIDE5Ny43NTg5LDk4LjUxODMgQzE5Ny4xNTQ5LDk5LjE2NTMgMTk2LjMxOTksOTkuOTYwMyAxOTUuNTI2OSw5OS41MzczIEMxOTEuMTY2OSw5Ny4yMTgzIDE4Ni42NDI5LDk5LjE3MjMgMTgyLjIxNjksOTguOTUxMyBDMTcyLjY0NzksOTguNDc1MyAxNjguODE4OSwxMDEuNzY4MyAxNjYuOTg0OSwxMTEuMzUzMyBDMTY1LjcwNTksMTE4LjAzMTMgMTYxLjM5OTksMTIzLjExOTMgMTU3Ljk1MDksMTI4LjYzMTMgQzE1NS4xNDU5LDEzMy4xMTUzIDE1MS45MzY5LDEzNy4zNDYzIDE0OC44NzM5LDE0MS42NjczIEMxNDcuODkwOSwxNDMuMDUzMyAxNDcuNTAxOSwxNDQuNDY0MyAxNDcuNTc5OSwxNDYuMjI3MyBDMTQ3Ljg5NTksMTUzLjMyMTMgMTQ2LjE0OTksMTYwLjE5MjMgMTQ0Ljg5MDksMTY3LjA5NDMgQzE0NC4xOTI5LDE3MC45MjYzIDE0NC43Mjk5LDE3NC4wMjYzIDE0Ny43OTI5LDE3Ni42OTkzIEMxNDkuMTY0OSwxNzcuODk1MyAxNTEuMjY4OSwxNzkuNTk1MyAxNTAuMzk1OSwxODEuNDM2MyBDMTQ5LjU2NTksMTgzLjE4OTMgMTQ3LjA4MTksMTgxLjg0NTMgMTQ1LjM0MTksMTgyLjAyMzMgQzE0NC4zMTM5LDE4Mi4xMjgzIDE0My4yMzc5LDE4MS44NjgzIDE0Mi4xOTQ5LDE4MS43MDEzIEMxNDEuNzU5OSwxODEuNjMyMyAxNDEuMDUyOSwxODEuNjAxMyAxNDEuMDc5OSwxODEuMDIxMyBDMTQxLjI5NDksMTc2LjI1NzMgMTM4LjAwNTksMTcyLjQxNTMgMTM3LjY1MzksMTY3LjgxMjMgQzEzNy42MjM5LDE2Ny40MjgzIDEzNy40OTE5LDE2Ny4wMDkzIDEzNy41OTU5LDE2Ni42NjQzIEMxMzkuNjYwOSwxNTkuODc4MyAxMzYuMzM1OSwxNTMuNjgzMyAxMzUuNTQ2OSwxNDcuMjA5MyBDMTM1LjIzMjksMTQ0LjYzMTMgMTMzLjgyNDksMTQ0LjE2MjMgMTMxLjY5MDksMTQ0LjE4NDMgQzEzMC40NDg5LDE0NC4xOTczIDEyOS43ODc5LDE0NC42ODAzIDEyOS4zOTI5LDE0NS44ODQzIEMxMjcuMjIwOSwxNTIuNDk3MyAxMjMuODY0OSwxNTguNTM5MyAxMjAuNjU0OSwxNjQuNjkwMyBDMTE4Ljc5NjksMTY4LjI1MDMgMTE4LjA5NTksMTcyLjU1NjMgMTIwLjc4NTksMTc2LjQ3MjMgQzEyMS42ODg5LDE3Ny43ODYzIDEyMS42NjI5LDE3OS41MDkzIDEyMi43NDY5LDE4MC44NTAzIEMxMjMuNjczOSwxODEuOTk3MyAxMjIuMjc4OSwxODIuMjA2MyAxMjEuNTM3OSwxODIuNDIzMyBDMTE2LjMyMTksMTgzLjk0OTMgMTE0LjQwMDksMTgyLjQxNzMgMTExLjk5NTksMTc3LjU0NzMgQzExMC42Mzg5LDE3NC43OTkzIDExMS40NTg5LDE3My4yMTQzIDExMi40ODM5LDE3MS4xMjQzIEMxMTMuNzkxOSwxNjguNDYxMyAxMTMuMzg3OSwxNjUuNjM2MyAxMTIuODcwOSwxNjIuOTA1MyBDMTEyLjQ5NDksMTYwLjkxNDMgMTEyLjc5MjksMTU5LjM3MjMgMTE0LjMxNDksMTU4LjAwNzMgQzExOC4yMDY5LDE1NC41MTYzIDExNy41NzY5LDE0OS4zNTYzIDExOC45NDI5LDE0NC45NDgzIEMxMTkuNDcwOSwxNDMuMjQzMyAxMTcuNjk0OSwxNDMuOTgzMyAxMTYuOTc0OSwxNDQuMDc1MyBDMTEwLjM2MTksMTQ0LjkxNjMgMTAzLjc0NDksMTQ1LjUzNjMgOTcuMTA3OSwxNDQuNDYzMyBDOTIuMTAzOSwxNDMuNjU0MyA4Ny4xMzY5LDE0Mi45MzUzIDgyLjQzODksMTQwLjYxODMgQzc2LjE4MTksMTM3LjUzMzMgNjguNjg3OSwxNDIuNzc0MyA2OC4yMDc5LDE1MC4zMzYzIEM2Ny44ODY5LDE1NS4zODYzIDY4LjM2NjksMTYwLjQyMTMgNjkuMTYzOSwxNjUuNDEyMyBDNjkuMzA5OSwxNjYuMzI5MyA2OS43MDE5LDE2Ny4yOTAzIDcwLjI0MDksMTY4LjA0NjMgQzcyLjgzODksMTcxLjY4NjMgNzQuMjM1OSwxNzYuMDU5MyA3Ny4yNTU5LDE3OS40MzczIEM3OC40NTA5LDE4MC43NzQzIDc4LjA2MDksMTgxLjU4NDMgNzYuMzU1OSwxODIuMDE4MyBDNzIuNTI0OSwxODIuOTkyMyA2OS42OTU5LDE4MC44NjkzIDY3Ljc3NzksMTc3LjY2MDMgQzY1LjIzODksMTczLjQxMTMgNjUuNTYxOSwxNjcuNzk0MyA2MS4yMDg5LDE2NC40ODMzIEM2MC4zNTc5LDE2My44MzUzIDYwLjIyODksMTYyLjUyNTMgNjAuMzU1OSwxNjEuNTEwMyBDNjAuNjM5OSwxNTkuMjI2MyA1OS40NTk5LDE1Ny42NzIzIDU4LjEzMDksMTU2LjExMzMgQzU1LjM0ODksMTU4Ljk0NTMgNTQuMDAxOSwxNjYuNzc2MyA1NS42NTc5LDE3MC40MzUzIEM1Ni40NDY5LDE3Mi4xNzczIDU3LjMxNjksMTczLjgyOTMgNTcuNDM5OSwxNzUuODYwMyBDNTcuNTUxOSwxNzcuNzAxMyA1OS44MTM5LDE3OC4xOTYzIDYwLjYyNjksMTc5LjcxMjMgQzYxLjA1OTksMTgwLjUxOTMgNjIuMjU0OSwxODEuMTY0MyA2MS42NzE5LDE4Mi4xODUzIEM2MS4yMDI5LDE4My4wMDYzIDYwLjA4MTksMTgyLjU3NTMgNTkuMjY1OSwxODIuNTQ2MyBDNTguMTE3OSwxODIuNTA1MyA1Ni45Nzk5LDE4Mi4yMzYzIDU1LjgzMDksMTgyLjEyMjMgQzUzLjEzMjksMTgxLjg1NzMgNTEuNTA5OSwxODEuMDQ2MyA1Mi4yNjg5LDE3Ny42OTkzIEM1Mi41NDY5LDE3Ni40NzEzIDUxLjM5MDksMTc0LjgyNjMgNTAuNjc0OSwxNzMuNDg0MyBDNDguODQwOSwxNzAuMDQyMyA0OC4xNTY5LDE2Ni41MDgzIDQ4LjkzMTksMTYyLjYxNzMgQzQ5Ljk2OTksMTU3LjQxMDMgNDkuNTIxOSwxNTIuNDMzMyA0NS44MjU5LDE0OC4yMDAzIEM0NC45MjM5LDE0Ny4xNjczIDQ1LjI3MTksMTQ2LjMyMzMgNDYuMjEyOSwxNDUuNTA4MyBDNDcuODExOSwxNDQuMTIyMyA0OC4wNTQ5LDE0Mi42MzgzIDQ3LjQ3NDksMTQwLjQzMDMgQzQ2LjE1OTksMTM1LjQyNzMgNDYuNDY1OSwxMzAuMzI1MyA0OC4wMzA5LDEyNS4zNDgzIEM0OC4wODg5LDEyNS4xNjYzIDQ4LjI5NTksMTI0Ljk4MzMgNDguMjY3OSwxMjQuODI5MyBDNDcuMzg3OSwxMjAuMDM3MyA0Ny4yODI5LDExNS4xMDczIDQ1Ljc1ODksMTEwLjQzMjMgQzQ1LjU0NzksMTA5Ljc4NjMgNDUuMDA1OSwxMDkuMjE5MyA0NC4yMTk5LDEwOS40MTAzIEM0My40NjM5LDEwOS41OTUzIDQzLjIxNzksMTEwLjI1NTMgNDMuMjc4OSwxMTAuOTg5MyBDNDMuODc3OSwxMTguMTk2MyA0Mi4zNTI5LDEyNS4xNzUzIDQxLjAzMzksMTMyLjE3OTMgQzQwLjg3NDksMTMzLjAyMjMgNDAuOTk5OSwxMzMuODQ4MyA0MS4zMjk5LDEzNC43MDkzIEM0NC41MTQ5LDE0Mi45OTgzIDQzLjU4NzksMTUxLjMxNjMgNDEuMzEwOSwxNTkuNjU0MyBDMzkuMTM0OSwxNTIuNDQwMyAzNi44MzM5LDE0NS4yMjMzIDM4LjY2NTksMTM3LjU3NjMgQzM5LjIzMjksMTM1LjIxMTMgMzkuNjM1OSwxMzIuODc1MyAzOS43MDQ5LDEzMC40NjkzIEMzOS45MjA5LDEyMi44NjQzIDQwLjQ0NjksMTE1LjI2NzMgNDAuNzU0OSwxMDcuNjc3MyBDNDEuMTMwOSw5OC4zODUzIDUwLjAwNTksODYuMDczMyA2Mi4wNjQ5LDg0LjIyMzMgQzcwLjMxNjksODIuOTU4MyA3OC4zODc5LDgzLjk2OTMgODYuNDk1OSw4NS4xMzgzIEM5NS40NjQ5LDg2LjQzMjMgMTA0LjQ3NDksODcuMjM5MyAxMTMuNTI3OSw4Ny42ODEzIEMxMjAuMzYxOSw4OC4wMTUzIDEyNi45NDE5LDg3LjA0MDMgMTMzLjQwMjksODQuODI4MyBDMTM5LjMxNjksODIuODA0MyAxNDUuMzEyOSw4MS4wMTkzIDE1MS4yNDM5LDc5LjA0MTMgQzE1NC40MzE5LDc3Ljk3OTMgMTU3LjQ2MDksNzYuNTY2MyAxNjAuMTUxOSw3My44NDczIiBpZD0iQ293IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTUpIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" />
                            <br />
                            <p className='mt-4'>Modal Sampai ke Peternak</p>
                        </div>

                        <div className="col-sm-3 col-12" style={{ textAlign: 'center' }}>
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQwcHgiIGhlaWdodD0iMjQwcHgiIHZpZXdCb3g9IjAgMCAyNDAgMjQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbi1yZXN1bHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIgcng9IjEyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgeD0iLTI0IiB5PSItMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS0zIiB0cmFuc2Zvcm09InNjYWxlKDAuNSwwLjUpIj48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS0zIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUVHV2xEUTFCclEwZERiMnh2Y2xOd1lXTmxSMlZ1WlhKcFkxSkhRZ0FBT0kyTlZWMW9IRlVVUHJ0elp5TWt6bE5zTklWMHFEOE5KUTJUVmpTaHRMcC8zZDAyYnBaSk50b2k2R1QyN3M2WXljNDRNN3Y5b1U5RlVId3g2cHNVeEwrM2dDQW85US9iUHJRdmxRb2wydFFnS0Q2MCtJTlE2SXVtNjVrN001bHB1ckhlWmU1ODg1M3ZubnZ1dVdmdkJlaTVxbGlXa1JRQkZwcXVMUmN5NG5PSGo0ZzlLNUNFaDZBWEJxRlhVUjByWGFsTUFqWlBDM2UxVzk5RHdudGYyZFhkL3ArdHQwWWRGU0J4SDJLejVxZ0xpSThCOEtkVnkzWUJldnFSSHovcVdoNzJZdWkzTVVERUwzcTQ0V1BYdzNNK2ZvMXBadVFzNHRPSUJWVlRhb2lYRUkvTXhmaEdEUHN4c05aZm9FMXE2NnJvNWFKaW0zWGRvTEZ3NzJIK24yM0JhSVh6YmNPbno1bWZQb1R2WVZ6N0t6VWw1K0ZSeEV1cWtwOUcvQWppYTIxOXRoemcyNWFia1JFL0JwRGMzcHF2cGhIdlJGeXMyd2VxdnAra3JiV0tJWDduaERiekxPSXRpTTgzNThwVHdkaXJxcFBGbk1GMnhMYzFXdkx5T3dUQWlicGJtdkhIY3Z0dFU1N3k1K1hxTlpyTGUzbEUvUHE4ZVVqMmZYS2ZPZTNwZk9qemhKWXRCL3lsbDVTREZjU0RpSCtoUmtIMjUrTCtzZHhLRUFNWmFocmxTWDh1a3FNT1d5L2pYVzJtNk05TERCYzMxQjlMRnV2NmdWS2cvMFN6aTNLQXIxa0dxMUdNalUvYUxibnE2L2xSeGM0WGZKOThoVGFyZ1grK0RiTUpCU2lZTUllOUNrMVlBeEZrS0VBRzN4YllhS21ERGdZeUZLMFVHWXBmb1dZWEcrZkFQUEk2dEpuTndiN0NsUDdJeUYrRCtiak90Q3BraHo2Q0ZySWEvSTZzRnRObDhhdUZYR01UUDM0c053SS9KaGtnRXRtRHoxNHlTZmFSY1RJQklubUtQRTMya3h5eUUyVHYrdGhLYkVWZVBEZlcvYnlNTTFLbW0wWGRPYlM3b0dEL015cE1YRlBYckN3T3RvWWp5eW43QlYyOS9NWmZzVnpwTERkUnR1SVpuYnBYenZsZitldjhNdllyL0dxazRIL2tWL0czY3NkYXpMdXlUTVBzYkZoemQxVWFiUWJqRnZEUm1jV0p4UjN6Y2ZIa1Z3OUdmcGJKbWVldjlGMDhXVzh1RGthc2x3WDZhdmxXR1U2TlJLejBnL1NIdEN5OUozMG8vY2E5elgzS2ZjMTl6bjNCWFFLUk84dWQ0NzdoTG5BZmMxL0c5bXJ6R2xyZmV4WjVHTGRuNlpacnJFb2hJMndWSGhaeXdqYmhVV0V5OGljTUNHTkNVZGlCbHEzcit4YWZMNTQ5SFE1akgrYW4rMXkrTGxZQmlmdXhBdlJOL2xWVlZPbHdsQ2tkVm05Tk9MNUJFNHdrUTJTTWxEWlU5N2hYODZFaWxVL2xVbWtRVXp0VEU2bXgxRUVQaDdPbWRxQnRBdnY4SGRXcGJySlM2dEpqM24wQ1dkTTZidXNOelJWM1M5S1RZaHF2TmlxV211cm9pS2dZaHNoTWptaFRoOXB0V2hzRjc5NzBqL1NiTXJzUEUxc3VSNXo3RE1DK1AvSHMreTdpanJRQWxoeUFnY2NqYmhqUHlnZmVCVGp6aE5xeTI4RWRrVWg4QytEVTkrejJ2L295ZUg3OTFPbmN4SE9zNXkyQXRUYzduYi9mNzNUV1BrRC9xd0Jualg4Qm9KOThWUU5jQys4QUFBRkZTVVJCVkdnRjdkamJEWU13REFYUUJqRU1ZcXlxWTFXTXhUcHBMaUpJUUlBOGFyaVdrcDhJUHV3ZU82MGFtNjdyN01zdFk4d3dqdVBIN2RNejN1VXVhNjNwKy83cjlyZVBJUlcvOVFtUXpDVjl1YjBZZ1NJZ3poeHZRa2pGYjFFWkJBZEVLb2xrZkpUcXRuYjdidi96T0ptNThtb1JFMEF6WWdGb1Jhd0FHaEU3Z0RaRUVLQUpjUWpRZ2pnRmFFQmNBdGdSVVFCbVJEU0FGWkVFWUVRa0E5Z1FXUUFtUkRhQUJWRUVZRUFVQXg1SDRFYUdPeXcrU01sNjZtYlh6Tk9ENGs2Z0NQTlVZL0NGd0YxWU9uNXpSeEpKUklOcWFVYlV1WkEvNzlzZDN3bTN4SWRiZFM2MHJYem8yWFZDYk82MC9IeEtKZ0ZLS3Y0Q2tFeml1eUtCV0FFMEluWUFiWWdnUUJQaUVLQUZjUXJRZ0xnRXNDT2lBTXlJYUFBcklnbkFpRWdHc0NHeUFFeUliQUFMb2dqQWdDZ0dQSTdBWDl3NkYzSnRxSE1obk1XTEZTclNEOWpPbmFrVkhwWllBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0ibGluZWFyR3JhZGllbnQtNSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwQTM1NjUiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzE3ODJEOSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJMYW5kaW5nLVBhZ2UtKExvZ2dlZC1PdXQpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAyOC4wMDAwMDAsIC05MDAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJTZWN0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNzIwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IlN0ZXBzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzIuMDAwMDAwLCAxODAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imljb24tcmVzdWx0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NTYuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay00IiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGwtb3BhY2l0eT0iMC4yIiBmaWxsPSJ1cmwoI3BhdHRlcm4tMikiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYzLjkzNDUsNDAuMDAwMiBDMTc0LjQzNzUsNDAuNTIwMiAxODQuMzczNSw0MS4wMTQyIDE5NC4zMTA1LDQxLjQ5OTIgQzE5NS4yODU1LDQxLjU0NzIgMTk2LjAzNTUsNDEuNTY0MiAxOTYuMDY5NSw0Mi45NjgyIEMxOTYuMzE4NSw1My4xOTgyIDE5Ni42NTc1LDYzLjQyNjIgMTk2Ljk2NzUsNzMuNjM3MiBDMTk2LjA3MjUsNzMuOTM3MiAxOTUuODg2NSw3My4yMDMyIDE5NS41NTA1LDcyLjg1ODIgQzE5Mi4zMDA1LDY5LjUyNzIgMTg5LjAwNzUsNjYuMjMzMiAxODUuODk4NSw2Mi43NzMyIEMxODQuNjYwNSw2MS4zOTYyIDE4My45Njc1LDYxLjYzMjIgMTgyLjY4MDUsNjIuNjg0MiBDMTY0LjIyNDUsNzcuNzY0MiAxNDUuNjk5NSw5Mi43NjAyIDEyNy4yNjA1LDEwNy44NjAyIEMxMjUuNjI5NSwxMDkuMTk1MiAxMjQuOTU1NSwxMDkuMDM5MiAxMjMuNzAyNSwxMDcuNDM4MiBDMTE4LjkzNjUsMTAxLjM1NDIgMTEzLjk0OTUsOTUuNDQ0MiAxMDkuMTUzNSw4OS4zODMyIEMxMDguMTI2NSw4OC4wODUyIDEwNy41NTg1LDg4LjEyNjIgMTA2LjM0MjUsODkuMTE5MiBDODguNzY5NSwxMDMuNDY5MiA3MS4xMzc1LDExNy43NDgyIDUzLjU3NTUsMTMyLjExMTIgQzUyLjIzMDUsMTMzLjIxMTIgNTEuNjM2NSwxMzMuMDg0MiA1MC42NTg1LDEzMS43NzEyIEM0OC43Nzc1LDEyOS4yNDkyIDQ2LjgxODUsMTI2Ljc2NjIgNDQuNjgxNSwxMjQuNDYxMiBDNDMuMzgyNSwxMjMuMDYwMiA0NC4xNTk1LDEyMi41MjkyIDQ1LjE4OTUsMTIxLjY5MzIgQzYzLjIwMDUsMTA3LjA4NjIgODEuMTkxNSw5Mi40NTUyIDk5LjE4ODUsNzcuODMyMiBDMTAyLjM1NDUsNzUuMjU5MiAxMDUuNTY3NSw3Mi43NDIyIDEwOC42Njk1LDcwLjA5NjIgQzEwOS42NDc1LDY5LjI2MzIgMTEwLjA3OTUsNjkuNDU4MiAxMTAuNzk1NSw3MC4zNTAyIEMxMTUuODE1NSw3Ni41OTgyIDEyMC45MTY1LDgyLjc4MTIgMTI1LjkwOTUsODkuMDUyMiBDMTI2LjkxOTUsOTAuMzIwMiAxMjcuNDk5NSw5MC40NzYyIDEyOC44NDY1LDg5LjM3MjIgQzE0My42ODQ1LDc3LjIxNzIgMTU4LjU2OTUsNjUuMTE5MiAxNzMuNTAyNSw1My4wODIyIEMxNzQuOTc1NSw1MS44OTUyIDE3NC45MDY1LDUxLjI4ODIgMTczLjY0MDUsNTAuMDQ0MiBDMTcwLjQ0MjUsNDYuODk5MiAxNjcuMzk1NSw0My42MDMyIDE2My45MzQ1LDQwLjAwMDIgWiBNMTk0LjY1MTMsMTQ0Ljk0MzYgQzE5NC42NTEzLDE2My4xMjE2IDE5NC42MzAzLDE4MS4yOTg2IDE5NC42ODczLDE5OS40Nzc2IEMxOTQuNjkzMywyMDEuMTE0NiAxOTQuMzM3MywyMDEuNjMxNiAxOTIuNjA5MywyMDEuNjAzNiBDMTg1Ljg4MzMsMjAxLjQ5NTYgMTc5LjE1NDMsMjAxLjUxMjYgMTcyLjQyODMsMjAxLjYwNTYgQzE3MC44OTgzLDIwMS42MjY2IDE3MC41NTEzLDIwMS4xOTM2IDE3MC41NTMzLDE5OS43MDU2IEMxNzAuNTk0MywxNjMuMjA2NiAxNzAuNTkzMywxMjYuNzA3NiAxNzAuNTQ2Myw5MC4yMDc2IEMxNzAuNTQ0Myw4OC41NjQ2IDE3MC45MTEzLDg4LjA0NzYgMTcyLjYzMzMsODguMDc0NiBDMTc5LjM1OTMsODguMTgxNiAxODYuMDg4Myw4OC4xNjc2IDE5Mi44MTQzLDg4LjA4MTYgQzE5NC4zMzUzLDg4LjA2MTYgMTk0LjY5MDMsODguNDg5NiAxOTQuNjg2Myw4OS45Nzk2IEMxOTQuNjMyMywxMDguMzAwNiAxOTQuNjUxMywxMjYuNjIyNiAxOTQuNjUxMywxNDQuOTQzNiBaIE0xMTIuMTM2NywxNjIuMDQyMiBDMTEyLjEzNjcsMTQ5LjUyMDIgMTEyLjE2NTcsMTM2Ljk5NjIgMTEyLjEwMDcsMTI0LjQ3NTIgQzExMi4wOTE3LDEyMi45MDkyIDExMi40MjU3LDEyMi40MTYyIDExNC4wNzc3LDEyMi40NDIyIEMxMjAuODc0NywxMjIuNTQ5MiAxMjcuNjczNywxMjIuNTMzMiAxMzQuNDcxNywxMjIuNDY0MiBDMTM1Ljg3MDcsMTIyLjQ1MDIgMTM2LjI1MjcsMTIyLjgzMTIgMTM2LjI0OTcsMTI0LjIzMzIgQzEzNi4yMDY3LDE0OS40OTMyIDEzNi4yMDc3LDE3NC43NTMyIDEzNi4yMzY3LDIwMC4wMTIyIEMxMzYuMjM3NywyMDEuMTg4MiAxMzUuOTYyNywyMDEuNTk4MiAxMzQuNzExNywyMDEuNTg4MiBDMTI3LjY5OTcsMjAxLjUyODIgMTIwLjY4NjcsMjAxLjUxMjIgMTEzLjY3NDcsMjAxLjU5NzIgQzExMi4xOTA3LDIwMS42MTQyIDExMi4xMjM3LDIwMC45ODgyIDExMi4xMjY3LDE5OS44MjQyIEMxMTIuMTU4NywxODcuMjMwMiAxMTIuMTQ3NywxNzQuNjM2MiAxMTIuMTQ3NywxNjIuMDQyMiBMMTEyLjEzNjcsMTYyLjA0MjIgWiBNNzQuMzM4OCwxNjkuMTM2OSBDNzQuMzM4OCwxNzkuMjk2OSA3NC4yOTc4LDE4OS40NTY5IDc0LjM4MDgsMTk5LjYxNTkgQzc0LjM5MzgsMjAxLjI0MjkgNzMuOTYwOCwyMDEuNjE5OSA3Mi4zNzI4LDIwMS41OTg5IEM2NS42NDk4LDIwMS41MDY5IDU4LjkyMjgsMjAxLjUyNTkgNTIuMTk3OCwyMDEuNTk2OSBDNTAuNzk0OCwyMDEuNjEyOSA1MC4yMzE4LDIwMS4zOTQ5IDUwLjIzNTgsMTk5Ljc4NzkgQzUwLjI5MzgsMTc5LjE4MjkgNTAuMjgxOCwxNTguNTc2OSA1MC4yNTM4LDEzNy45NzE5IEM1MC4yNTE4LDEzNi43OTE5IDUwLjM1NTgsMTM2LjE5MjkgNTEuODIwOCwxMzYuMjA5OSBDNTguODMxOCwxMzYuMjkxOSA2NS44NDQ4LDEzNi4zMDA5IDcyLjg1NTgsMTM2LjIwMDkgQzc0LjQyOTgsMTM2LjE3ODkgNzQuMzUyOCwxMzYuOTM2OSA3NC4zNTA4LDEzOC4wMTQ5IEM3NC4zMzE4LDE0OC4zODg5IDc0LjMzODgsMTU4Ljc2MjkgNzQuMzM4OCwxNjkuMTM2OSBaIiBpZD0iUmVzdWx0IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTUpIiBtYXNrPSJ1cmwoI21hc2stNCkiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="" />
                            <br />
                            <p className='mt-4'>Tunggu Hasilnya</p>
                        </div>
                    </div>
                    {/* <Row>
                        {card}

                    </Row> */}

<h1 style={{ textAlign: 'center' }} >Mudah BerInvestasi </h1>

<div>

    <Row>
   
        <Col className='d-flex'>
            {
                this.state.productTop.slice(0, 3).map(prod =>
          
                    <Col md='4' key={prod.product_id}  >
       <Link style={{textDecoration:'none', color:'black'}} to={`/productdetail/${prod.product_id}`}> 
                        <Card >
                            <CardImg top width="100%" height="200px" src={prod.foto} alt="Card image cap" />
                        
                            <CardBody>
                                <CardTitle> {prod.nama_product}</CardTitle>
                                <CardSubtitle> HARGA: Rp.{prod.price}</CardSubtitle>
                                <CardText></CardText>
                                
                            </CardBody>
                           
                        </Card>
                        </Link>
                    </Col>
                )
            }

        </Col>

      
    </Row>
</div>

                </Container>
                
            </div>

        )

    }
} export default Home;