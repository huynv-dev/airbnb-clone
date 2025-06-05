import type { Meta, StoryObj } from '@storybook/react';
import { Typography, Title, Text, Link, Paragraph } from './Typography';
const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'title',
        'text',
        'link',
        'paragraph',
        'code',
        'mark',
        'keyboard',
        'delete',
        'underline',
        'strong',
        'italic',
        'disabled',
      ],
    },
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
    },
    disabled: { control: 'boolean' },
    mark: { control: 'boolean' },
    code: { control: 'boolean' },
    keyboard: { control: 'boolean' },
    underline: { control: 'boolean' },
    delete: { control: 'boolean' },
    strong: { control: 'boolean' },
    italic: { control: 'boolean' },
    editable: { control: 'boolean' },
    copyable: { control: 'boolean' },
    children: {
      control: 'text',
      defaultValue: 'Editable Typography',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Basic Typography
export const Basic: Story = {
  args: {
    children: 'This is a basic text',
  },
};

// Title Levels
export const TitleLevels = () => (
  <div className="space-y-4">
    <Title level={1} editable>h1. Typography Title</Title>
    <Title level={2} editable>h2. Typography Title</Title>
    <Title level={3} editable>h3. Typography Title</Title>
    <Title level={4} editable>h4. Typography Title</Title>
    <Title level={5} editable>h5. Typography Title</Title>
  </div>
);

// Copy 
export const Copy = () => (
  <div className="space-y-4">
    <Text level={1} copyable>h1. Typography Title</Text>
    <Text level={2} copyable>h2. Typography Title</Text>
    <Text level={3} copyable>h3. Typography Title</Text>
    <Text level={4} copyable>h4. Typography Title</Text>
    <Text level={5} copyable>h5. Typography Title</Text>
  </div>
);

// Text Types
export const TextTypes = () => (
  <div className="flex flex-col">
    <Text>Primary Text</Text>
    <Text type="secondary">Secondary Text</Text>
    <Text type="success">Success Text</Text>
    <Text type="warning">Warning Text</Text>
    <Text type="danger">Danger Text</Text>
  </div>
);

// Text Decorations
export const TextDecorations = () => (
  <div className="flex flex-col gap-3">
    <Text strong>Strong Text</Text>
    <Text italic>Italic Text</Text>
    <Text underline>Underline Text</Text>
    <Text delete>Deleted Text</Text>
    <Text mark>Marked Text</Text>
    <Text code>Code Text</Text>
    <Text keyboard>Keyboard Text</Text>
    <Text disabled>Disabled Text</Text>
  </div>
);

// Links
export const Links = () => (
  <div className="flex flex-col gap-3">
    <Link>Default Link</Link>
    <Link type="success">Success Link</Link>
    <Link disabled>Disabled Link</Link>
    <Link underline>Underline Link</Link>
  </div>
);

// Paragraphs
export const Paragraphs = () => (
  <div className="space-y-4">
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ante erat.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Duis vitae dolor at quam pulvinar commodo.
    </Paragraph>
    <Paragraph type="secondary">
      This is a secondary paragraph with <Text mark>highlighted</Text> text and
      <Text strong> bold text</Text>.
    </Paragraph>
  </div>
);

// Interactive Example
export const Interactive = () => (
  <div className="space-y-4">
    <Link onClick={() => alert('Link clicked!')}>
      Click me!
    </Link>
  </div>
);

// Combined Features
export const CombinedFeatures = () => (
  <div className="space-y-4">
    <Title level={2} type="success" mark>
      Combined Title Features
    </Title>
    <Text strong italic type="warning">
      Combined Text Features
    </Text>
    <Link underline type="danger" disabled>
      Combined Link Features
    </Link>
    <Paragraph>
      A paragraph with <Text mark>highlighted</Text>,
      <Text code> code </Text>, and
      <Text keyboard> keyboard </Text> text.
      Also includes <Link>a link</Link> and
      <Text type="success" strong> success text</Text>.
    </Paragraph>
  </div>
);

