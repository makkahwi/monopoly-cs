import classnames from "classnames";
import { useFormik } from "formik";
import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

export default function FormRenderer({
  inputs,
  onSubmit,
  submitLabel,
  fullWidthSubmit,
}) {
  const formik = useFormik({
    initialValues: inputs.reduce(
      (final, { name, type, defaultValue }) => ({
        ...final,
        [name]: defaultValue ? defaultValue : type == "number" ? 0 : "",
      }),
      {}
    ),
    validate: (values) => {
      let errors = {};

      inputs.forEach(({ name, required, min, max }) => {
        if (!values[name] && required) {
          errors = { ...errors, [name]: "This is Required" };
        } else if (values[name] && min && values[name] < min) {
          errors = {
            ...errors,
            [name]: `This should not be smaller than ${min}`,
          };
        } else if (values[name] && max && values[name] > max) {
          errors = {
            ...errors,
            [name]: `This should not be greater than ${max}`,
          };
        }
      });

      return errors;
    },
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  const [focuses, setFocuses] = useState({});

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        {inputs.map(
          (
            {
              name,
              required,
              placeholder,
              type,
              label,
              icon,
              fullWidth,
              double,
              options,
              ...rest
            },
            i
          ) => (
            <Col md={fullWidth ? 12 : double ? 6 : 4} key={i}>
              <Label>
                {label}{" "}
                <span className="text-danger"> {required ? " *" : ""}</span>
              </Label>

              {type === "select" ? (
                options.map(({ label, value }, y) => (
                  <FormGroup check className="form-check-radio mr-3" key={y}>
                    <Label check>
                      <Input
                        className={classnames("input-lg w-100", {
                          "input-group-focus": focuses.playerName,
                          "form-control-danger":
                            formik.errors[name] && formik.touched[name],
                        })}
                        placeholder={placeholder || label + "..."}
                        name={name}
                        {...rest}
                        type="radio"
                        checked={formik.values[name] == value}
                        onClick={() => formik.setFieldValue(name, value)}
                      />
                      <span className="form-check-sign" />
                      {label}
                    </Label>
                  </FormGroup>
                ))
              ) : (
                <InputGroup
                  onFocus={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      [name]: true,
                    }))
                  }
                  onBlur={(e) =>
                    setFocuses((current) => ({
                      ...current,
                      [name]: false,
                    }))
                  }
                >
                  {icon && (
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className={icon} />
                      </InputGroupText>
                    </InputGroupAddon>
                  )}

                  <Input
                    className={classnames("input-lg", {
                      "input-group-focus": focuses.playerName,
                      "form-control-danger":
                        formik.errors[name] && formik.touched[name],
                    })}
                    placeholder={placeholder || label + "..."}
                    type={type}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    {...rest}
                  />
                </InputGroup>
              )}

              <Label className="text-danger">
                {formik.errors[name] &&
                  formik.touched[name] &&
                  formik.errors[name]}
              </Label>
            </Col>
          )
        )}

        <Col md="12">
          <Button
            color="info"
            type="submit"
            className={`my-1 ${fullWidthSubmit ? "w-100" : ""}`}
          >
            {submitLabel || "Submit"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
