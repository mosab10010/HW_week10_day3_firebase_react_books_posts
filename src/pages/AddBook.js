import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function AddPost() {
  const { addBook } = useContext(PostsContext)
  return (
    <div className="ms-4">
      <h1>Add Book</h1>
      <Form className="mt-5" onSubmit={addBook}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Title
          </Form.Label>
          <Col md="6">
            <Form.Control name="title" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="image" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            author
          </Form.Label>
          <Col md="6">
            <Form.Control name="author" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Book</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddPost