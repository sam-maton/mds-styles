const radiusTokens = [
  { token: '--mds-radius-xs', label: 'xs', primitive: '--mds-border-radius-100 (2px)' },
  { token: '--mds-radius-sm', label: 'sm', primitive: '--mds-border-radius-200 (4px)' },
  { token: '--mds-radius-md', label: 'md', primitive: '--mds-border-radius-300 (8px)' },
  { token: '--mds-radius-lg', label: 'lg', primitive: '--mds-border-radius-400 (12px)' },
  { token: '--mds-radius-xl', label: 'xl', primitive: '--mds-border-radius-500 (16px)' },
  { token: '--mds-radius-pill', label: 'pill', primitive: '--mds-border-radius-600 (9999px)' },
];

function renderRadiusSwatch({ token, label, primitive }) {
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
        <div style="font-family:sans-serif;font-size:12px;color:#666;">Alias: ${label}</div>
        <div style="font-family:monospace;font-size:12px;color:#999;">→ ${primitive}</div>
      </div>
    </div>
  `;
}

export default {
  title: 'Semantic/Border Radius',
};

export const AllRadii = {
  name: 'All Radii',
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">Semantic Border Radius Tokens</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 32px;">
        Named aliases for common border-radius use cases. Each token maps to a primitive radius token.
      </p>
      ${radiusTokens.map(renderRadiusSwatch).join('')}
    </div>
  `,
};
