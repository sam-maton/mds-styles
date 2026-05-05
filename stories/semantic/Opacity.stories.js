const opacityTokens = [
  { token: '--mds-opacity-more-subtle', label: 'More Subtle', primitive: '--mds-opacity-100 (0.1)' },
  { token: '--mds-opacity-subtle', label: 'Subtle', primitive: '--mds-opacity-200 (0.2)' },
  { token: '--mds-opacity-default', label: 'Default', primitive: '--mds-opacity-300 (0.4)' },
  { token: '--mds-opacity-prominent', label: 'Prominent', primitive: '--mds-opacity-400 (0.6)' },
  { token: '--mds-opacity-more-prominent', label: 'More Prominent', primitive: '--mds-opacity-500 (0.8)' },
];

function renderOpacitySwatch({ token, label, primitive }) {
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
        <div style="font-family:sans-serif;font-size:12px;color:#666;">${label}</div>
        <div style="font-family:monospace;font-size:12px;color:#999;">→ ${primitive}</div>
      </div>
    </div>
  `;
}

export default {
  title: 'Semantic/Opacity',
};

export const AllOpacities = {
  name: 'All Opacities',
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">Semantic Opacity Tokens</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 32px;">
        Named aliases for common opacity use cases. Scale runs from most transparent (more-subtle)
        to most opaque (more-prominent). The checkerboard pattern shows the transparency level.
      </p>
      ${opacityTokens.map(renderOpacitySwatch).join('')}
    </div>
  `,
};
