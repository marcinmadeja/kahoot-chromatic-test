import { Button } from '../button-raised'

export default {
  title: 'Button Raised',
  component: Button
}

export const Primary = () => {
  return (
    <div>
      <Button>Button Raised</Button>
      <br /><br />

      <Button className='color-green'>Button Raised green</Button>
      <br /><br />

      <Button className='color-grey'>Button Raised grey</Button>
    </div>
  );
};

