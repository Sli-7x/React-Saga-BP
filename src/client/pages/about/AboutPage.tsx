import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withError } from '../../components/errors/ErrorWrapper';
import { Button } from '../../components/ui/button/Button';

export class AboutPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      show: false,
    };
  }

  onClick() {
    this.setState({ show: true }, () => {
      throw new Error('asd');
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Typescript react ssr | About</title>
        </Helmet>
        ABOUT US
        <Button onClick={this.onClick}>Click me</Button>
      </div>
    );
  }
}

export default withError(AboutPage);
