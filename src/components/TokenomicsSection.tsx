import React from "react";
import "./TokenomicsSection.scss";

interface TokenomicsData {
  totalSupply: string;
  liquidityLock: string;
  burnMechanism: string;
  distribution: {
    liquidity: number;
    team: number;
    marketing: number;
    community: number;
    burn: number;
  };
}

interface TokenomicsSectionProps {
  data?: TokenomicsData;
}

const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({
  data = {
    totalSupply: "1,000,000,000",
    liquidityLock: "2 Years",
    burnMechanism: "Auto-Burn 2%",
    distribution: {
      liquidity: 40,
      team: 15,
      marketing: 20,
      community: 15,
      burn: 10,
    },
  },
}) => {
  // Calculate chart angles
  const calculateChartPath = (percentage: number, startAngle: number) => {
    const radius = 80;
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;

    const x1 = radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = radius * Math.sin((endAngle * Math.PI) / 180);

    const largeArcFlag = angle > 180 ? 1 : 0;

    return `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Colors for chart segments
  const chartColors = {
    liquidity: "#00FFD1",
    team: "#FF00A0",
    marketing: "#FFE600",
    community: "#FF3B3B",
    burn: "#00FF88",
  };

  return (
    <section id="tokenomics" className="tokenomics-section">
      <div className="container">
        {/* Brutalist Header */}
        <div className="section-header">
          <h2 className="section-title">TOKENOMICS</h2>
          <div className="title-accent"></div>
        </div>

        <div className="tokenomics-content">
          {/* Token Info Grid */}
          <div className="tokenomics-grid">
            {/* Total Supply */}
            <div className="info-box supply-box">
              <div className="box-header">
                <div className="icon-container">
                  <svg className="brutalist-icon" viewBox="0 0 40 40">
                    <rect
                      x="5"
                      y="5"
                      width="30"
                      height="30"
                      fill="none"
                      stroke="#000"
                      strokeWidth="3"
                    />
                    <circle cx="20" cy="20" r="8" fill="#FFE600" />
                    <path
                      d="M 15 15 L 25 25 M 25 15 L 15 25"
                      stroke="#000"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="box-title">Total Supply</h3>
              </div>
              <div className="box-value">{data.totalSupply}</div>
              <div className="box-description">
                Maximum tokens that will ever exist
              </div>
            </div>

            {/* Liquidity Lock */}
            <div className="info-box liquidity-box">
              <div className="box-header">
                <div className="icon-container">
                  <svg className="brutalist-icon" viewBox="0 0 40 40">
                    <rect
                      x="8"
                      y="12"
                      width="24"
                      height="16"
                      fill="none"
                      stroke="#000"
                      strokeWidth="3"
                    />
                    <circle cx="20" cy="20" r="6" fill="#00FFD1" />
                    <path
                      d="M 20 14 L 20 26 M 16 20 L 24 20"
                      stroke="#000"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="box-title">Liquidity Lock</h3>
              </div>
              <div className="box-value">{data.liquidityLock}</div>
              <div className="box-description">Tokens locked for stability</div>
            </div>

            {/* Burn Mechanism */}
            <div className="info-box burn-box">
              <div className="box-header">
                <div className="icon-container">
                  <svg className="brutalist-icon" viewBox="0 0 40 40">
                    <path
                      d="M 20 5 L 25 15 L 35 15 L 28 22 L 30 35 L 20 28 L 10 35 L 12 22 L 5 15 L 15 15 Z"
                      fill="#FF3B3B"
                      stroke="#000"
                      strokeWidth="2"
                    />
                    <circle cx="20" cy="20" r="3" fill="#FFE600" />
                  </svg>
                </div>
                <h3 className="box-title">Burn Mechanism</h3>
              </div>
              <div className="box-value">{data.burnMechanism}</div>
              <div className="box-description">Automatic token reduction</div>
            </div>
          </div>

          {/* Distribution Chart */}
          <div className="chart-section">
            <h3 className="chart-title">Token Distribution</h3>
            <div className="chart-container">
              <svg className="distribution-chart" viewBox="0 0 200 200">
                {/* Chart segments */}
                <g className="chart-segments">
                  <path
                    className="chart-segment"
                    d={calculateChartPath(data.distribution.liquidity, 0)}
                    fill={chartColors.liquidity}
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <path
                    className="chart-segment"
                    d={calculateChartPath(
                      data.distribution.team,
                      data.distribution.liquidity * 3.6
                    )}
                    fill={chartColors.team}
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <path
                    className="chart-segment"
                    d={calculateChartPath(
                      data.distribution.marketing,
                      (data.distribution.liquidity + data.distribution.team) *
                        3.6
                    )}
                    fill={chartColors.marketing}
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <path
                    className="chart-segment"
                    d={calculateChartPath(
                      data.distribution.community,
                      (data.distribution.liquidity +
                        data.distribution.team +
                        data.distribution.marketing) *
                        3.6
                    )}
                    fill={chartColors.community}
                    stroke="#000"
                    strokeWidth="3"
                  />
                  <path
                    className="chart-segment"
                    d={calculateChartPath(
                      data.distribution.burn,
                      (data.distribution.liquidity +
                        data.distribution.team +
                        data.distribution.marketing +
                        data.distribution.community) *
                        3.6
                    )}
                    fill={chartColors.burn}
                    stroke="#000"
                    strokeWidth="3"
                  />
                </g>

                {/* Center circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="20"
                  fill="#000"
                  stroke="#FFE600"
                  strokeWidth="2"
                />
                <text
                  x="100"
                  y="105"
                  textAnchor="middle"
                  fill="#FFE600"
                  fontSize="12"
                  fontWeight="bold"
                >
                  TOTAL
                </text>
              </svg>

              {/* Chart Legend */}
              <div className="chart-legend">
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: chartColors.liquidity }}
                  ></div>
                  <span className="legend-label">
                    Liquidity ({data.distribution.liquidity}%)
                  </span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: chartColors.team }}
                  ></div>
                  <span className="legend-label">
                    Team ({data.distribution.team}%)
                  </span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: chartColors.marketing }}
                  ></div>
                  <span className="legend-label">
                    Marketing ({data.distribution.marketing}%)
                  </span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: chartColors.community }}
                  ></div>
                  <span className="legend-label">
                    Community ({data.distribution.community}%)
                  </span>
                </div>
                <div className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: chartColors.burn }}
                  ></div>
                  <span className="legend-label">
                    Burn ({data.distribution.burn}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
