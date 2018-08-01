<!--  -->
<template>
  <div ref="container" class="d3-container">
  </div>
</template>

<script type='text/ecmascript-6'>
import d3 from 'd3'
export default {
  props: {
    skills: {
      type: Array,
      default: []
    }
  },
  computed: {
    nodes() {
      let nodes = [...this.skills]
      nodes.unshift({
        name: '李坤',
        percent: 100
      })
      return nodes
    },
    edges() {
      let edges = []
      for(let i=0; i< this.skills.length; i++){
        edges.push({source: 0, target: i+1})
      }
      return edges
    }
  },
  mounted() {
    this.createForce()
    window.addEventListener('resize', ()=>{
      this.createForce()
    })
  },
  methods: {
    createForce() {
      let width = this.$refs.container.clientWidth
      let height = this.$refs.container.clientHeight
      let nodes = [...this.nodes]
      let edges = [...this.edges]
      let svg = d3.select('.d3-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
      let force = d3.layout.force()
        .nodes(nodes)
        .links(edges)
        .size([width, height])
        .linkDistance(150)
        .charge(-400)
      force.start()
      //添加连线
      var svg_edges = svg.selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .style("stroke","#ccc")
        .style("stroke-width",1);

      var color = d3.scale.category20();
      
      //添加节点
      var svg_nodes = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r",function(d, i){
          return d.percent * 20 / 100
        })
        .style("fill",function(d,i){
        	return color(i);
        })
        .call(force.drag);	//使得节点能够拖动

      //添加描述节点的文字
      var svg_texts = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .style("fill", "black")
        .attr("dx", 20)
        .attr("dy", 8)
        .text(function(d){
        	return d.name;
        });

      force.on("tick", function(){	//对于每一个时间间隔

        //更新连线坐标
        svg_edges.attr("x1",function(d){ return d.source.x; })
          .attr("y1",function(d){ return d.source.y; })
          .attr("x2",function(d){ return d.target.x; })
          .attr("y2",function(d){ return d.target.y; });

        //更新节点坐标
        svg_nodes.attr("cx",function(d){ return d.x; })
          .attr("cy",function(d){ return d.y; });

        //更新文字坐标
        svg_texts.attr("x", function(d){ return d.x; })
          .attr("y", function(d){ return d.y; });
      });
    }
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  .d3-container
    margin: 0 auto
    height: 60vh
    width: 99vw
    overflow hidden
    svg
      overflow hidden
</style>