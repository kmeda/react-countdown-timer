var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countDownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function(newStatus){
        return () => {
          this.props.onStatusChange(newStatus);
        }
  },
  render: function() {
    var {countDownStatus} = this.props;
  var renderStartStopButton = ()=>{
    if (countDownStatus === 'started') {
      return <button className="button hollow secondary" onClick={this.onStatusChange("paused")}>Pause</button>
    } else {
      return <button className="button hollow secondary" onClick={this.onStatusChange("started")}>Start</button>
    };
  };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
