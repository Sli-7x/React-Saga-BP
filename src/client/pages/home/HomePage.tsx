import * as React from 'react';
import { connect } from 'react-redux';
import { ErrorBoundary } from '../../components/errors/ErrorBoundary';
import { Filters } from '../../components/filters/Filters';
import { loadFilters } from '../../store/filters/actions';
import { errorToast } from '../../components/ui/toast/Toast.action';

interface IHomePageProps {
  filters: any;
  dispatch: any;
}

interface IHomePageState {
  fetchData: any;
}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(loadFilters({ id: '5555' }));
  }

  getList() {
    this.props.dispatch(errorToast('ERRORRRORROROROR'));
    this.props.dispatch(loadFilters({ id: '5555' }));
  }

  render() {
    const { filters } = this.props;

    return (
      <div>
        <h1>Home page</h1>
        <button onClick={this.getList}>Get</button>
        <ErrorBoundary>{filters.loading ? <h3>Loading...</h3> : <Filters list={filters.list} />}</ErrorBoundary>
      </div>
    );
  }
}

export const mapStateToProps = (state: any) => ({
  filters: state.filters,
  toast: state.toast,
});

export default connect(mapStateToProps)(HomePage);
