import { Input } from '../input'

export default {
  title: 'Input',
  component: Input
}

export const Primary = () => <Input id="test" />
export const InputWithLabel = () => <Input id="test" label="My label" />
export const InputWithLabelOptional = () => <Input id="test" label="My label" isOptional={true} />
export const InputWithError = () => <Input id="test" label="Email" errorMessage="Please enter your email address." />
export const InputDisabled = () => <Input id="test" label="Email" disabled={true} />
export const InputWithLimit = () => <Input id="test" label="My label" limit={99} />