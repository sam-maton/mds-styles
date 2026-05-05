const colorPalettes = [
  { name: 'Blue', prefix: 'blue' },
  { name: 'Red', prefix: 'red' },
  { name: 'Green', prefix: 'green' },
  { name: 'Yellow', prefix: 'yellow' },
  { name: 'Orange', prefix: 'orange' },
  { name: 'Purple', prefix: 'purple' },
  { name: 'Gray', prefix: 'gray' },
];

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];

function renderSwatch(token, label) {
  return `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
      <div style="
        width:48px;height:48px;
        border-radius:6px;
        background:var(${token});
        border:1px solid rgba(0,0,0,0.08);
        flex-shrink:0;
      "></div>
      <div>
        <div style="font-family:monospace;font-size:13px;font-weight:600;">${token}</div>
        <div style="font-family:monospace;font-size:12px;color:#666;">${label}</div>
      </div>
    </div>
  `;
}

function renderPalette(palette) {
  const swatches = shades
    .map((shade) => renderSwatch(`--mds-${palette.prefix}-${shade}`, `${palette.name} ${shade}`))
    .join('');

  return `
    <div style="margin-bottom:32px;">
      <h3 style="font-family:sans-serif;margin:0 0 12px;">${palette.name}</h3>
      ${swatches}
    </div>
  `;
}

export default {
  title: 'Primitive/Colors',
};

export const AllPalettes = {
  name: 'All Palettes',
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">Primitive Color Tokens</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 32px;">
        Raw colour values expressed as HSL. Shades range from 100 (lightest) to 900 (darkest).
      </p>
      ${colorPalettes.map(renderPalette).join('')}
    </div>
  `,
};

// Individual palette stories
export const Blue = {
  render: () => `<div style="padding:24px;">${renderPalette({ name: 'Blue', prefix: 'blue' })}</div>`,
};

export const Red = {
  render: () => `<div style="padding:24px;">${renderPalette({ name: 'Red', prefix: 'red' })}</div>`,
};

export const Green = {
  render: () => `<div style="padding:24px;">${renderPalette({ name: 'Green', prefix: 'green' })}</div>`,
};

export const Yellow = {
  render: () => `<div style="padding:24px;">${renderPalette({ name: 'Yellow', prefix: 'yellow' })}</div>`,
};

export const Orange = {
  render: () => `<div style="padding:24px;">${renderPalette({ name: 'Orange', prefix: 'orange' })}</div>`,
};

export const Purple = {
  render: () => `<div style="padding:24px;">${renderPalette({ name: 'Purple', prefix: 'purple' })}</div>`,
};

export const Gray = {
  render: () => `<div style="padding:24px;">${renderPalette({ name: 'Gray', prefix: 'gray' })}</div>`,
};
