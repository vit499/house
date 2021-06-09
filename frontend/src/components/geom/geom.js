import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

import triangle from "img/triangle.png";

const Geom = () => {
  const [angA, setAngA] = useState(5);
  const [ans, setAns] = useState("");
  const [result, setResult] = useState("");
  const [summary, setSummary] = useState(0);

  const change = (e) => {
    setAns(e.target.value);
  };
  const random = (min, max) => {
    const max1 = max / 2;
    let r = Math.floor(Math.random() * max1);
    console.log("r", r);
    r = r * 2;
    if (r < min) r = min;
    if (r > max) r = max;
    return r;
  };
  const click = () => {
    const a = random(4, 80);
    setAngA(a);
    setResult("");
    setAns("");
  };
  const clickAns = () => {
    console.log(ans);
    const r = 180 - (angA + angA / 2);
    if (r == ans) {
      setResult("Правильно");
      setSummary((prev) => prev + 1);
    } else {
      setResult(`Нет, правильно ${r}`);
    }
  };
  useEffect(() => {
    const a = random(1, 80);
    setAngA(a);
  }, []);
  return (
    <div className="container">
      <span>-------</span>
      <br />
      <img
        src={triangle}
        width="200"
        height="200"
        className="d-inline-block align-top"
        alt="xx"
      />
      <br />
      <span>Дано - треугольник ABC, у которого AB = BC, </span>
      <br />
      <span>CK - биссектриса</span>
      <br />
      <span>угол A = {angA} град.</span>
      <br />
      <span>Скажи, чему равен угол AKC ?</span>
      <br />

      <Row className="mt-2">
        <Col>
          <Form.Control
            type="text"
            placeholder="ответ"
            className="w-4"
            value={ans}
            onChange={change}
          />
        </Col>
        <Col>
          <Button variant="primary" onClick={clickAns} className="ml-2">
            Ответ
          </Button>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={3}>
          <span>{result}</span>
        </Col>
        <Col>
          <span>Правильных ответов: {summary}</span>
        </Col>
      </Row>
      <Button variant="success" onClick={click} className="mt-2">
        Еще
      </Button>
    </div>
  );
};

export default Geom;
