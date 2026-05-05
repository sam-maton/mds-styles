const shadowTokens = [
  { token: '--mds-shadow-card', label: 'Card', primitive: '--mds-shadow-200' },
  { token: '--mds-shadow-dropdown', label: 'Dropdown', primitive: '--mds-shadow-300' },
  { token: '--mds-shadow-popover', label: 'Popover', primitive: '--mds-shadow-400' },
  { token: '--mds-shadow-modal', label: 'Modal', primitive: '--mds-shadow-500' },
  { token: '--mds-shadow-overlay', label: 'Overlay', primitive: '--mds-shadow-600' },
];

function renderShadowSwatch({ token, label, primitive }) {
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
        <div style="font-family:sans-serif;font-size:12px;color:#666;">${label}</div>
        <div style="font-family:monospace;font-size:12px;color:#999;">→ ${primitive}</div>
      </div>
    </div>
  `;
}

export default {
  title: 'Semantic/Box Shadow',
};

export const AllShadows = {
  name: 'All Shadows',
  render: () => `
    <div style="padding:24px;background:#f0f0f0;min-height:100vh;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">Semantic Box Shadow Tokens</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 32px;">
        Named shadow aliases for common UI components. Each token maps to a primitive shadow token.
      </p>
      ${shadowTokens.map(renderShadowSwatch).join('')}
    </div>
  `,
};
