import { observable, action, computed } from 'mobx';
import * as filterTypes from '../../constants/filterTypes';
import { DURATION_FILTER_FUNCTIONS } from '../../constants/durationFilter';
import { getTracknameFilter } from '../../constants/nameFilter';
import { getAndCombined } from '../../services/filter';

class ChartStore {

    @observable durationFilterType;
    @observable query;

    constructor() {
        this.durationFilterType = filterTypes.ALL;
        this.query = '';
    }

    @action setFilterDuration = (filterType) => {
        this.durationFilterType = filterType;
    }

    @action setFilterQuery = (query) => {
        this.query = query;
    }

    @computed get combinedFilters() {
        return getAndCombined([
            DURATION_FILTER_FUNCTIONS[this.durationFilterType],
            getTracknameFilter(this.query)
        ]);
    }

}

const chartStore = new ChartStore();

export default chartStore;
export { ChartStore };
