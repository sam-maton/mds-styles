const backgroundTokens = [
  { token: '--mds-color-background-page', label: 'Page' },
  { token: '--mds-color-background-surface', label: 'Surface' },
  { token: '--mds-color-background-surface-prominent', label: 'Surface Prominent' },
];

const textTokens = [
  { token: '--mds-color-text-primary', label: 'Primary' },
  { token: '--mds-color-text-secondary', label: 'Secondary' },
  { token: '--mds-color-text-subtle', label: 'Subtle' },
  { token: '--mds-color-text-inverse', label: 'Inverse' },
  { token: '--mds-color-text-link', label: 'Link' },
  { token: '--mds-color-text-link-hover', label: 'Link Hover' },
];

const borderTokens = [
  { token: '--mds-color-border-subtle', label: 'Subtle' },
  { token: '--mds-color-border-default', label: 'Default' },
  { token: '--mds-color-border-prominent', label: 'Prominent' },
];

const brandPrimaryTokens = [
  { token: '--mds-color-brand-primary-more-prominent', label: 'More Prominent' },
  { token: '--mds-color-brand-primary-prominent', label: 'Prominent' },
  { token: '--mds-color-brand-primary', label: 'Default' },
  { token: '--mds-color-brand-primary-subtle', label: 'Subtle' },
  { token: '--mds-color-brand-primary-more-subtle', label: 'More Subtle' },
];

const brandSecondaryTokens = [
  { token: '--mds-color-brand-secondary-more-prominent', label: 'More Prominent' },
  { token: '--mds-color-brand-secondary-prominent', label: 'Prominent' },
  { token: '--mds-color-brand-secondary', label: 'Default' },
  { token: '--mds-color-brand-secondary-subtle', label: 'Subtle' },
  { token: '--mds-color-brand-secondary-more-subtle', label: 'More Subtle' },
];

const statusGroups = [
  {
    name: 'Success',
    tokens: [
      { token: '--mds-color-status-success-more-prominent', label: 'More Prominent' },
      { token: '--mds-color-status-success-prominent', label: 'Prominent' },
      { token: '--mds-color-status-success', label: 'Default' },
      { token: '--mds-color-status-success-subtle', label: 'Subtle' },
      { token: '--mds-color-status-success-more-subtle', label: 'More Subtle' },
    ],
  },
  {
    name: 'Error',
    tokens: [
      { token: '--mds-color-status-error-more-prominent', label: 'More Prominent' },
      { token: '--mds-color-status-error-prominent', label: 'Prominent' },
      { token: '--mds-color-status-error', label: 'Default' },
      { token: '--mds-color-status-error-subtle', label: 'Subtle' },
      { token: '--mds-color-status-error-more-subtle', label: 'More Subtle' },
    ],
  },
  {
    name: 'Warning',
    tokens: [
      { token: '--mds-color-status-warning-more-prominent', label: 'More Prominent' },
      { token: '--mds-color-status-warning-prominent', label: 'Prominent' },
      { token: '--mds-color-status-warning', label: 'Default' },
      { token: '--mds-color-status-warning-subtle', label: 'Subtle' },
      { token: '--mds-color-status-warning-more-subtle', label: 'More Subtle' },
    ],
  },
  {
    name: 'Info',
    tokens: [
      { token: '--mds-color-status-info-more-prominent', label: 'More Prominent' },
      { token: '--mds-color-status-info-prominent', label: 'Prominent' },
      { token: '--mds-color-status-info', label: 'Default' },
      { token: '--mds-color-status-info-subtle', label: 'Subtle' },
      { token: '--mds-color-status-info-more-subtle', label: 'More Subtle' },
    ],
  },
];

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
        <div style="font-family:sans-serif;font-size:12px;color:#666;">${label}</div>
      </div>
    </div>
  `;
}

function renderGroup(heading, tokens) {
  return `
    <div style="margin-bottom:32px;">
      <h3 style="font-family:sans-serif;margin:0 0 12px;">${heading}</h3>
      ${tokens.map(({ token, label }) => renderSwatch(token, label)).join('')}
    </div>
  `;
}

export default {
  title: 'Semantic/Colors',
};

export const Background = {
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 8px;">Background Colors</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 24px;">
        Background surfaces get lighter as they move closer to the user in light mode,
        and darker → lighter in dark mode.
      </p>
      ${renderGroup('Background', backgroundTokens)}
    </div>
  `,
};

export const Text = {
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 8px;">Text Colors</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 24px;">
        Semantic text color tokens.
      </p>
      ${renderGroup('Text', textTokens)}
    </div>
  `,
};

export const Border = {
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 8px;">Border Colors</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 24px;">
        <code>subtle</code> is intended for disabled states.
      </p>
      ${renderGroup('Border', borderTokens)}
    </div>
  `,
};

export const Brand = {
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 8px;">Brand Colors</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 24px;">
        Five-step scale: lighter = more prominent, darker = more subtle. Consistent across light and dark themes.
      </p>
      ${renderGroup('Brand Primary', brandPrimaryTokens)}
      ${renderGroup('Brand Secondary', brandSecondaryTokens)}
    </div>
  `,
};

export const Status = {
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 8px;">Status Colors</h2>
      <p style="font-family:sans-serif;color:#555;margin:0 0 24px;">
        Five-step scale per status category: success, error, warning, info.
      </p>
      ${statusGroups.map(({ name, tokens }) => renderGroup(name, tokens)).join('')}
    </div>
  `,
};

export const AllColors = {
  name: 'All Colors',
  render: () => `
    <div style="padding:24px;">
      <h2 style="font-family:sans-serif;margin:0 0 24px;">All Semantic Color Tokens</h2>
      ${renderGroup('Background', backgroundTokens)}
      ${renderGroup('Text', textTokens)}
      ${renderGroup('Border', borderTokens)}
      ${renderGroup('Brand Primary', brandPrimaryTokens)}
      ${renderGroup('Brand Secondary', brandSecondaryTokens)}
      ${statusGroups.map(({ name, tokens }) => renderGroup(`Status — ${name}`, tokens)).join('')}
    </div>
  `,
};
