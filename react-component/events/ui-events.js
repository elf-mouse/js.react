var UIComponent = React.createClass({
  handleScroll: function(event) {
    console.info('onScroll');
  },
  handleWheel: function(event) {
    console.info('onWheel');
  },
  render: function() {
    return (
      <div className="container" onScroll={this.handleScroll} onWheel={this.handleWheel}>
        <ul dangerouslySetInnerHTML={getItemList()} />
      </div>
    );
  }
});
