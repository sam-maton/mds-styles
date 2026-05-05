const radiusTokens = [
  { token: '--mds-border-radius-100', value: '2px', label: '100' },
  { token: '--mds-border-radius-200', value: '4px', label: '200' },
  { token: '--mds-border-radius-300', value: '8px', label: '300' },
  { token: '--mds-border-radius-400', value: '12px', label: '400' },
  { token: '--mds-border-radius-500', value: '16px', label: '500' },
  { token: '--mds-border-radius-600', value: '9999px', label: '600 (pill)' },
];

function renderRadiusSwatch({ token, value, label }) {
  return `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
      <div style="
        width:64px;height:64px;
        background:#3b82f6;
        border-radius:var(${token});
        flex-shrink:0;
      "></div>
      <div>
        <div style="font-family:monospace;font-size:13px;font-weight:600;">${token}</div>
        <div style="font-family:monospace;font-size:12px;color:#666;">${value}</div>
        <div style="font-family:sans-serif;font-size:12px;color:#999;">Scale ${label}</div>
      </div>
    </div>
  `;
}

export default {
  title: 'Primitive/Border Radius',
};

export const AllRadii = {
  name: 'All Radii',
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">Primitive Border Radius Tokens</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 32px;">
        Raw border-radius values. Scale runs from 100 (2 px, most subtle) to 600 (9999 px, full pill).
      </p>
      ${radiusTokens.map(renderRadiusSwatch).join('')}
    </div>
  `,
};
