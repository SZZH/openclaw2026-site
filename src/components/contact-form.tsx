"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const wechat = String(formData.get("wechat") || "").trim();
    const topic = String(formData.get("topic") || "").trim();
    const detail = String(formData.get("detail") || "").trim();

    const subject = encodeURIComponent(`[OpenClaw咨询] ${topic || "未填写主题"}`);
    const body = encodeURIComponent(
      `姓名: ${name}\n微信: ${wechat}\n问题类型: ${topic}\n\n当前问题:\n${detail}`,
    );

    window.location.href = `mailto:openclaw-helper@openclaw.cc?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>你的称呼</span>
        <input name="name" placeholder="例如：张三" required />
      </label>
      <label>
        <span>你的微信</span>
        <input name="wechat" placeholder="例如：zhangsan123" required />
      </label>
      <label>
        <span>问题类型</span>
        <select name="topic" required defaultValue="">
          <option value="" disabled>
            请选择
          </option>
          <option value="安装">安装</option>
          <option value="部署">部署</option>
          <option value="报错排障">报错排障</option>
          <option value="安全与成本">安全与成本</option>
        </select>
      </label>
      <label>
        <span>问题描述</span>
        <textarea
          name="detail"
          rows={5}
          placeholder="描述你的当前环境、错误现象、你已尝试过的步骤"
          required
        />
      </label>
      <button type="submit" className="btn btn-primary">
        提交咨询信息
      </button>
      {submitted ? <p className="form-tip">信息已提交，请保持微信可联系。</p> : null}
    </form>
  );
}
