import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addFavourite } from "../redux/favouriteSlice" // Importa l'azione Redux dal file corretto

const Job = ({ data }) => {
  const dispatch = useDispatch() // Inizializza dispatch

  const handleAddFavourite = () => {
    dispatch(addFavourite(data.company_name)) // Aggiungi l'azienda ai preferiti
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <button className="btn btn-primary" onClick={handleAddFavourite}>
          Aggiungi ai Preferiti
        </button>
      </Col>
    </Row>
  )
}

export default Job
