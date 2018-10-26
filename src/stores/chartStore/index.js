import { observable, action } from 'mobx';

class ChartStore {

    @observable dataSet;

    constructor() {
        this.dataSet = [];
    }

    @action addRandomValue = () => {
        const randomInt = 10 + Math.random() * 100;
        this.dataSet.push(randomInt);
    }

}

const chartStore = new ChartStore();

export default chartStore;
export { ChartStore };
