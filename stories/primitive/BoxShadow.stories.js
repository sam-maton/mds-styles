const shadowTokens = [
  { token: '--mds-shadow-100', label: '100 — most subtle' },
  { token: '--mds-shadow-200', label: '200' },
  { token: '--mds-shadow-300', label: '300' },
  { token: '--mds-shadow-400', label: '400' },
  { token: '--mds-shadow-500', label: '500' },
  { token: '--mds-shadow-600', label: '600 — most prominent' },
];

function renderShadowSwatch({ token, label }) {
  return `
    <div style="display:flex;align-items:center;gap:24px;margin-bottom:32px;">
      <div style="
        width:80px;height:56px;
        background:#fff;
        border-radius:8px;
        box-shadow:var(${token});
        flex-shrink:0;
      "></div>
      <div>
        <div style="font-family:monospace;font-size:13px;font-weight:600;">${token}</div>
        <div style="font-family:sans-serif;font-size:12px;color:#999;">${label}</div>
      </div>
    </div>
  `;
}

export default {
  title: 'Primitive/Box Shadow',
};

export const AllShadows = {
  name: 'All Shadows',
  render: () => `
    <div style="padding:24px;background:#f0f0f0;min-height:100vh;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">Primitive Box Shadow Tokens</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 32px;">
        Elevation shadows. Scale runs from 100 (most subtle) to 600 (most prominent).
      </p>
      ${shadowTokens.map(renderShadowSwatch).join('')}
    </div>
  `,
};
