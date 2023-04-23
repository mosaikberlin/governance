export const governance  = {
  name: "flare",
  children: [
   {
    name: "analytics",
    children: [
     {
      name: "cluster",
      children: [
       {name: "AgglomerativeCluster", value: 10},
       {name: "CommunityStructure", value: 10},
       {name: "HierarchicalCluster", value: 10},
       {name: "MergeEdge", value: 10}
      ]
     },
     {
      name: "graph",
      children: [
       {name: "BetweennessCentrality", value: 10},
       {name: "LinkDistance", value: 10},
       {name: "MaxFlowMinCut", value: 10},
       {name: "ShortestPaths", value: 10},
       {name: "SpanningTree", value: 10}
      ]
     },
     {
      name: "optimization",
      children: [
       {name: "AspectRatioBanker", value: 10}
      ]
     }
    ]
   },
   {
    name: "animate",
    children: [
     {name: "Easing", value: 10},
     {name: "FunctionSequence", value: 10},
     {
      name: "interpolate",
      children: [
       {name: "ArrayInterpolator", value: 10},
       {name: "ColorInterpolator", value: 10},
       {name: "DateInterpolator", value: 10},
       {name: "Interpolator", value: 10},
       {name: "MatrixInterpolator", value: 10},
       {name: "NumberInterpolator", value: 10},
       {name: "ObjectInterpolator", value: 10},
       {name: "PointInterpolator", value: 10},
       {name: "RectangleInterpolator", value: 10}
      ]
     },
     {name: "ISchedulable", value: 10},
     {name: "Parallel", value: 10},
     {name: "Pause", value: 10},
     {name: "Scheduler", value: 10},
     {name: "Sequence", value: 10},
     {name: "Transition", value: 10},
     {name: "Transitioner", value: 10},
     {name: "TransitionEvent", value: 10},
     {name: "Tween", value: 10}
    ]
   },
   {
    name: "data",
    children: [
     {
      name: "converters",
      children: [
       {name: "Converters", value: 10},
       {name: "DelimitedTextConverter", value: 10},
       {name: "GraphMLConverter", value: 10},
       {name: "IDataConverter", value: 10},
       {name: "JSONConverter", value: 10}
      ]
     },
     {name: "DataField", value: 10},
     {name: "DataSchema", value: 10},
     {name: "DataSet", value: 10},
     {name: "DataSource", value: 10},
     {name: "DataTable", value: 10},
     {name: "DataUtil", value: 10}
    ]
   },
   {
    name: "display",
    children: [
     {name: "DirtySprite", value: 10},
     {name: "LineSprite", value: 10},
     {name: "RectSprite", value: 10},
     {name: "TextSprite", value: 10}
    ]
   },
   {
    name: "flex",
    children: [
     {name: "FlareVis", value: 10}
    ]
   },
   {
    name: "physics",
    children: [
     {name: "DragForce", value: 10},
     {name: "GravityForce", value: 10},
     {name: "IForce", value: 10},
     {name: "NBodyForce", value: 10},
     {name: "Particle", value: 10},
     {name: "Simulation", value: 10},
     {name: "Spring", value: 10},
     {name: "SpringForce", value: 10}
    ]
   },
   {
    name: "query",
    children: [
     {name: "AggregateExpression", value: 10},
     {name: "And", value: 10},
     {name: "Arithmetic", value: 10},
     {name: "Average", value: 10},
     {name: "BinaryExpression", value: 10},
     {name: "Comparison", value: 10},
     {name: "CompositeExpression", value: 10},
     {name: "Count", value: 10},
     {name: "DateUtil", value: 10},
     {name: "Distinct", value: 10},
     {name: "Expression", value: 10},
     {name: "ExpressionIterator", value: 10},
     {name: "Fn", value: 10},
     {name: "If", value: 10},
     {name: "IsA", value: 10},
     {name: "Literal", value: 10},
     {name: "Match", value: 10},
     {name: "Maximum", value: 10},
     {
      name: "methods",
      children: [
       {name: "add", value: 10},
       {name: "and", value: 10},
       {name: "average", value: 10},
       {name: "count", value: 10},
       {name: "distinct", value: 10},
       {name: "div", value: 10},
       {name: "eq", value: 10},
       {name: "fn", value: 10},
       {name: "gt", value: 10},
       {name: "gte", value: 10},
       {name: "iff", value: 10},
       {name: "isa", value: 10},
       {name: "lt", value: 10},
       {name: "lte", value: 10},
       {name: "max", value: 10},
       {name: "min", value: 10},
       {name: "mod", value: 10},
       {name: "mul", value: 10},
       {name: "neq", value: 10},
       {name: "not", value: 10},
       {name: "or", value: 10},
       {name: "orderby", value: 10},
       {name: "range", value: 10},
       {name: "select", value: 10},
       {name: "stddev", value: 10},
       {name: "sub", value: 10},
       {name: "sum", value: 10},
       {name: "update", value: 10},
       {name: "variance", value: 10},
       {name: "where", value: 10},
       {name: "xor", value: 10},
       {name: "_", value: 10}
      ]
     },
     {name: "Minimum", value: 10},
     {name: "Not", value: 10},
     {name: "Or", value: 10},
     {name: "Query", value: 10},
     {name: "Range", value: 10},
     {name: "StringUtil", value: 10},
     {name: "Sum", value: 10},
     {name: "Variable", value: 10},
     {name: "Variance", value: 10},
     {name: "Xor", value: 10}
    ]
   },
   {
    name: "scale",
    children: [
     {name: "IScaleMap", value: 10},
     {name: "LinearScale", value: 10},
     {name: "LogScale", value: 10},
     {name: "OrdinalScale", value: 10},
     {name: "QuantileScale", value: 10},
     {name: "QuantitativeScale", value: 10},
     {name: "RootScale", value: 10},
     {name: "Scale", value: 10},
     {name: "ScaleType", value: 10},
     {name: "TimeScale", value: 10}
    ]
   },
   {
    name: "util",
    children: [
     {name: "Arrays", value: 10},
     {name: "Colors", value: 10},
     {name: "Dates", value: 10},
     {name: "Displays", value: 10},
     {name: "Filter", value: 10},
     {name: "Geometry", value: 10},
     {
      name: "heap",
      children: [
       {name: "FibonacciHeap", value: 10},
       {name: "HeapNode", value: 10}
      ]
     },
     {name: "IEvaluable", value: 10},
     {name: "IPredicate", value: 10},
     {name: "IValueProxy", value: 10},
     {
      name: "math",
      children: [
       {name: "DenseMatrix", value: 10},
       {name: "IMatrix", value: 10},
       {name: "SparseMatrix", value: 10}
      ]
     },
     {name: "Maths", value: 10},
     {name: "Orientation", value: 10},
     {
      name: "palette",
      children: [
       {name: "ColorPalette", value: 10},
       {name: "Palette", value: 10},
       {name: "ShapePalette", value: 10},
       {name: "SizePalette", value: 10}
      ]
     },
     {name: "Property", value: 10},
     {name: "Shapes", value: 10},
     {name: "Sort", value: 10},
     {name: "Stats", value: 10},
     {name: "Strings", value: 10}
    ]
   },
   {
    name: "vis",
    children: [
     {
      name: "axis",
      children: [
       {name: "Axes", value: 10},
       {name: "Axis", value: 10},
       {name: "AxisGridLine", value: 10},
       {name: "AxisLabel", value: 10},
       {name: "CartesianAxes", value: 10}
      ]
     },
     {
      name: "controls",
      children: [
       {name: "AnchorControl", value: 10},
       {name: "ClickControl", value: 10},
       {name: "Control", value: 10},
       {name: "ControlList", value: 10},
       {name: "DragControl", value: 10},
       {name: "ExpandControl", value: 10},
       {name: "HoverControl", value: 10},
       {name: "IControl", value: 10},
       {name: "PanZoomControl", value: 10},
       {name: "SelectionControl", value: 10},
       {name: "TooltipControl", value: 10}
      ]
     },
     {
      name: "data",
      children: [
       {name: "Data", value: 10},
       {name: "DataList", value: 10},
       {name: "DataSprite", value: 10},
       {name: "EdgeSprite", value: 10},
       {name: "NodeSprite", value: 10},
       {
        name: "render",
        children: [
         {name: "ArrowType", value: 10},
         {name: "EdgeRenderer", value: 10},
         {name: "IRenderer", value: 10},
         {name: "ShapeRenderer", value: 10}
        ]
       },
       {name: "ScaleBinding", value: 10},
       {name: "Tree", value: 10},
       {name: "TreeBuilder", value: 10}
      ]
     },
     {
      name: "events",
      children: [
       {name: "DataEvent", value: 10},
       {name: "SelectionEvent", value: 10},
       {name: "TooltipEvent", value: 10},
       {name: "VisualizationEvent", value: 10}
      ]
     },
     {
      name: "legend",
      children: [
       {name: "Legend", value: 10},
       {name: "LegendItem", value: 10},
       {name: "LegendRange", value: 10}
      ]
     },
     {
      name: "operator",
      children: [
       {
        name: "distortion",
        children: [
         {name: "BifocalDistortion", value: 10},
         {name: "Distortion", value: 10},
         {name: "FisheyeDistortion", value: 10}
        ]
       },
       {
        name: "encoder",
        children: [
         {name: "ColorEncoder", value: 10},
         {name: "Encoder", value: 10},
         {name: "PropertyEncoder", value: 10},
         {name: "ShapeEncoder", value: 10},
         {name: "SizeEncoder", value: 10}
        ]
       },
       {
        name: "filter",
        children: [
         {name: "FisheyeTreeFilter", value: 10},
         {name: "GraphDistanceFilter", value: 10},
         {name: "VisibilityFilter", value: 10}
        ]
       },
       {name: "IOperator", value: 10},
       {
        name: "label",
        children: [
         {name: "Labeler", value: 10},
         {name: "RadialLabeler", value: 10},
         {name: "StackedAreaLabeler", value: 10}
        ]
       },
       {
        name: "layout",
        children: [
         {name: "AxisLayout", value: 10},
         {name: "BundledEdgeRouter", value: 10},
         {name: "CircleLayout", value: 10},
         {name: "CirclePackingLayout", value: 10},
         {name: "DendrogramLayout", value: 10},
         {name: "ForceDirectedLayout", value: 10},
         {name: "IcicleTreeLayout", value: 10},
         {name: "IndentedTreeLayout", value: 10},
         {name: "Layout", value: 10},
         {name: "NodeLinkTreeLayout", value: 10},
         {name: "PieLayout", value: 10},
         {name: "RadialTreeLayout", value: 10},
         {name: "RandomLayout", value: 10},
         {name: "StackedAreaLayout", value: 10},
         {name: "TreeMapLayout", value: 10}
        ]
       },
       {name: "Operator", value: 10},
       {name: "OperatorList", value: 10},
       {name: "OperatorSequence", value: 10},
       {name: "OperatorSwitch", value: 10},
       {name: "SortOperator", value: 10}
      ]
     },
     {name: "Visualization", value: 10}
    ]
   }
  ]
};
