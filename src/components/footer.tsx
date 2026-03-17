import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* 品牌区 */}
        <div className="footer-section footer-brand">
          <div className="footer-logo-wrapper">
            <img src="/logo.png" alt="OpenClaw Logo" className="footer-logo" />
          </div>
          <p className="footer-tagline">
            OpenClaw 中文实战知识库，提供安装、部署、报错排查、成本控制等完整攻略。
          </p>
        </div>

        {/* 快速导航 */}
        <div className="footer-section">
          <h4 className="footer-title">快速导航</h4>
          <ul className="footer-links">
            <li>
              <Link href="/playbooks">实操手册</Link>
            </li>
            <li>
              <Link href="/topics/installation">安装指南</Link>
            </li>
            <li>
              <Link href="/topics/deployment">部署教程</Link>
            </li>
            <li>
              <Link href="/topics/troubleshooting">报错排障</Link>
            </li>
          </ul>
        </div>

        {/* 专题分类 */}
        <div className="footer-section">
          <h4 className="footer-title">主要专题</h4>
          <ul className="footer-links">
            <li>
              <Link href="/topics/channels">渠道集成</Link>
            </li>
            <li>
              <Link href="/topics/cost-control">成本控制</Link>
            </li>
            <li>
              <Link href="/topics/security">安全防护</Link>
            </li>
            <li>
              <Link href="/topics/monitoring">监控告警</Link>
            </li>
          </ul>
        </div>

        {/* 联系与支持 */}
        <div className="footer-section">
          <h4 className="footer-title">联系我们</h4>
          <div className="footer-wechat-only">
            <p className="footer-tagline">微信有偿咨询入口维护中，暂未开放。</p>
          </div>
        </div>
      </div>

      {/* 版权区 */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="copyright">
            © {currentYear} OpenClaw. All rights reserved. | 
            <Link href="/privacy">隐私政策</Link> | 
            <Link href="/terms">使用条款</Link>
          </p>
          <p className="footer-credit">
            Made with ❤️ by OpenClaw Community
          </p>
        </div>
      </div>
    </footer>
  );
}
