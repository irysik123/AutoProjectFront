import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import ModalBox from "./ModalBox";
import { useSelector } from "react-redux";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Select from 'react-select';

export default function AddForm() {

  const { brands} = useSelector((state) => {
    return state.cars;
  });

  

  const { Formik } = formik;

  const schema = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    description: yup.string().required(),
    accessories: yup.string().required(),
    conditions: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], "terms must be accepted"),
  });
  
  return (
    <ModalBox>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          brand: "Select your brand",
          model: "Car Model",
          year: "2020",
          description: "",
          accessories: "",
          conditions: "",
          file: null,
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Label>Brand name</Form.Label>
              <Form.Select name="brand" aria-label="Select brand name" >
                <option>Select brand name</option>
                {brands.map((brand, i) => (
                  <option value={brand} key={i}>
                    {brand}
                  </option>
                ))}
              </Form.Select>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Enter Model Name</Form.Label>
                <Form.Control
                  type="text"
                  name="model"
                  value={values.model}
                  onChange={handleChange}
                  isValid={touched.model && !errors.model}
                />

                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Enter Year</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  isValid={touched.year && !errors.year}
                />
                <Form.Control.Feedback tooltip>
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationFormik102"
                className="position-relative"
              ></Form.Group>
            </Row>
            <Form.Label>Enter Car Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={values.description}
              onChange={handleChange}
              isValid={touched.description && !errors.description}
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>

            <Form.Label>Accessories</Form.Label>
            {/* {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Leather seats"
                  name="accessories"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Panoramic sunroof"
                  name="accessories"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Premium audio system"
                  name="accessories"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Premium leather seats"
                  name="accessories"
                  type={type}
                  id={`inline-${type}-1`}
                />
              </div>
            ))} */}
            {/* <Select {...props} onChange= {({ value }) => {handleChange(value)}
  }/> */}

            <Form.Label>Functionalities</Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Power liftgate"
                  name="functionalities"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Remote start"
                  name="functionalities"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="IntelliSafe advanced safety features"
                  name="functionalities"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Pilot Assist semi-autonomous driving"
                  name="functionalities"
                  type={type}
                  id={`inline-${type}-1`}
                />
              </div>
            ))}
            <Form.Label>Rental Conditions</Form.Label>

            <FloatingLabel
              controlId="floatingInput"
              label="Mileage"
              className="mb-3"
              
            >
              <Form.Control type="mileage" placeholder="km"  />
            </FloatingLabel>

            <FloatingLabel
              controlId="minimumAge"
              label="Minimum age"
              className="mb-3"
            >
              <Form.Control type="age" placeholder="Minimum age" />
            </FloatingLabel>

            <FloatingLabel controlId="price" label="Price $" className="mb-3">
              <Form.Control type="price" placeholder="Price" />
            </FloatingLabel>
            <Form.Check
              type="checkbox"
              id={`default-"checkbox"`}
              label="Valid driver’s license"
            />
            <Form.Check
              type="checkbox"
              id={`default-"checkbox"`}
              label="Security deposite required "
            />

            <Form.Group className="position-relative mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required
                name="file"
                onChange={handleChange}
                isInvalid={!!errors.file}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="position-relative mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik106"
                feedbackTooltip
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </ModalBox>
  );
}
