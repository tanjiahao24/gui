import React from "react";
import ReactDOM from "react-dom/client";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <Button onClick={() => {}}>提交</Button>
    <Button
      btnType={ButtonType.Link}
      href="http://baidu.com"
      disabled={true}
      size={ButtonSize.Large}
    >
      baidu
    </Button>
  </div>
);
