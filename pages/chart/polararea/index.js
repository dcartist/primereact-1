import React, { Component } from 'react';
import { TabView } from '../../../components/lib/tabview/TabView';
import { Chart } from '../../../components/lib/chart/Chart';
import { useLiveEditorTabs } from '../../../components/doc/common/liveeditor';
import AppContentContext from '../../../components/layout/appcontentcontext';
import { DocActions } from '../../../components/doc/common/docactions';
import Head from 'next/head';

export default class PolarAreaChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726",
                    "#26C6DA",
                    "#7E57C2"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };

        this.lightOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        this.darkOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React PolarArea Chart Component</title>
                    <meta name="description" content="Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value." />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h1>PolarAreaChart</h1>
                        <p>Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.</p>
                    </div>
                    <DocActions github="chart/polarareachart/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card p-d-flex p-jc-center">
                        <AppContentContext.Consumer>
                            {
                                context => {
                                    let options = context.darkTheme ? this.darkOptions : this.lightOptions;

                                    return <Chart type="polarArea" data={this.chartData} options={options} style={{ position: 'relative', width: '40%' }} />
                                }
                            }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <PolarAreaChartDemoDoc></PolarAreaChartDemoDoc>
            </div>
        )
    }
}

class PolarAreaChartDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class PolarAreaChartDemo extends Component {

    constructor(props) {
        super(props);

        this.chartData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726",
                    "#26C6DA",
                    "#7E57C2"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };

        this.lightOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
    }

    render() {
        return (
            <div className="card p-d-flex p-jc-center">
                <Chart type="polarArea" data={this.chartData} options={this.lightOptions} style={{ position: 'relative', width: '40%' }} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import { Chart } from 'primereact/chart';

const PolarAreaChartDemo = () => {
    const chartData = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#26C6DA",
                "#7E57C2"
            ],
            label: 'My dataset'
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <div className="card p-d-flex p-jc-center">
            <Chart type="polarArea" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Chart } from 'primereact/chart';

const PolarAreaChartDemo = () => {
    const chartData = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#26C6DA",
                "#7E57C2"
            ],
            label: 'My dataset'
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <div className="card p-d-flex p-jc-center">
            <Chart type="polarArea" data={chartData} options={options} style={{ position: 'relative', width: '40%' }} />
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'PolarAreaChartDemo', sources: this.sources, dependencies: { 'chart.js': '3.3.2' } })
                    }
                </TabView>
            </div>
        )
    }
}
