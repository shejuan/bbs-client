import React from 'react';

function TopicItem(props) {
  /**
   * 数量统计
   */
  function StatisticsItem(props) {
    return (
      <div className="topic-item__statistics-item">
        <div>{props.value}</div>
        <div>{props.title}</div>
      </div>
    );
  }
  function TopicMain(props) {
    return (
      <div className="topic-item__main">
        <div className="topic-item__title">标题</div>
        <div className="topic-item__subline">
          <div>
            {props.keyword.map((item, index) => {
              return <a className="keyword-item" key={index}>{item.key}</a>;
            })}
          </div>
          <div>asked 14 secs ago 김진우 1</div>
        </div>
      </div>
    );
  }
  const item = props.item;
  return (
    <div className="topic-item">
      <StatisticsItem title="answers" value={item.statistics.answers} />
      <TopicMain keyword={item.keyword}/>
    </div>
  );
}

export default TopicItem;
