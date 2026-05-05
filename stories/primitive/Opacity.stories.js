const opacityTokens = [
  { token: '--mds-opacity-100', value: '0.1', label: '100 (10%)' },
  { token: '--mds-opacity-200', value: '0.2', label: '200 (20%)' },
  { token: '--mds-opacity-300', value: '0.4', label: '300 (40%)' },
  { token: '--mds-opacity-400', value: '0.6', label: '400 (60%)' },
  { token: '--mds-opacity-500', value: '0.8', label: '500 (80%)' },
  { token: '--mds-opacity-600', value: '1',   label: '600 (100%)' },
];

function renderOpacitySwatch({ token, value, label }) {
  return `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
      <div style="
        position:relative;
        width:64px;height:40px;
        flex-shrink:0;
        border-radius:4px;
        overflow:hidden;
        border:1px solid rgba(0,0,0,0.1);
      ">
        <div style="
          position:absolute;inset:0;
          background: repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 0 0 / 12px 12px;
        "></div>
        <div style="
          position:absolute;inset:0;
          background:#3b82f6;
          opacity:var(${token});
        "></div>
      </div>
      <div>
        <div style="font-family:monospace;font-size:13px;font-weight:600;">${token}</div>
        <div style="font-family:monospace;font-size:12px;color:#666;">${value}</div>
        <div style="font-family:sans-serif;font-size:12px;color:#999;">Scale ${label}</div>
      </div>
    </div>
  `;
}

export default {
  title: 'Primitive/Opacity',
};

export const AllOpacities = {
  name: 'All Opacities',
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">Primitive Opacity Tokens</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 32px;">
        Numeric opacity values. Scale runs from 100 (most transparent) to 600 (fully opaque).
        The checkerboard pattern shows the transparency.
      </p>
      ${opacityTokens.map(renderOpacitySwatch).join('')}
    </div>
  `,
};
