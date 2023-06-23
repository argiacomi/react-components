const cssProperties = {
  color: [
    'backgroundColor',
    'borderColor',
    'borderBottomColor',
    'borderLeftColor',
    'borderRightColor',
    'borderTopColor',
    'caretColor',
    'color',
    'columnRuleColor',
    'floodColor',
    'lightingColor',
    'outlineColor',
    'textDecorationColor',
    'textEmphasisColor'
  ],
  borderRadius: [
    'borderRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius'
  ],
  other: [
    'alignContent',
    'alignItems',
    'alignSelf',
    'all',
    'animation',
    'animationDelay',
    'animationDirection',
    'animationDuration',
    'animationFillMode',
    'animationIterationCount',
    'animationName',
    'animationPlayState',
    'animationTimingFunction',
    'backfaceVisibility',
    'background',
    'backgroundAttachment',
    'backgroundBlendMode',
    'backgroundClip',
    'backgroundImage',
    'backgroundOrigin',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'border',
    'borderBottom',
    'borderBottomStyle',
    'borderBottomWidth',
    'borderCollapse',
    'borderImage',
    'borderImageOutset',
    'borderImageRepeat',
    'borderImageSlice',
    'borderImageSource',
    'borderImageWidth',
    'borderLeft',
    'borderLeftStyle',
    'borderLeftWidth',
    'borderRight',
    'borderRightStyle',
    'borderRightWidth',
    'borderSpacing',
    'borderStyle',
    'borderTop',
    'borderTopStyle',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'boxDecorationBreak',
    'boxShadow',
    'boxSizing',
    'breakAfter',
    'breakBefore',
    'breakInside',
    'captionSide',
    'clear',
    'clip',
    'clipPath',
    'clipRule',
    'colorInterpolationFilters',
    'columnCount',
    'columnFill',
    'columnGap',
    'columnRule',
    'columnRuleStyle',
    'columnRuleWidth',
    'columns',
    'columnSpan',
    'columnWidth',
    'contain',
    'content',
    'counterIncrement',
    'counterReset',
    'cue',
    'cueAfter',
    'cueBefore',
    'cursor',
    'direction',
    'display',
    'emptyCells',
    'filter',
    'flex',
    'flexBasis',
    'flexDirection',
    'flexFlow',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'float',
    'floodOpacity',
    'font',
    'fontFamily',
    'fontKerning',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'gap',
    'glyphOrientationVertical',
    'grid',
    'gridArea',
    'gridAutoColumns',
    'gridAutoFlow',
    'gridAutoRows',
    'gridColumn',
    'gridColumnEnd',
    'gridColumnGap',
    'gridColumnStart',
    'gridGap',
    'gridRow',
    'gridRowEnd',
    'gridRowGap',
    'gridRowStart',
    'gridTemplate',
    'gridTemplateAreas',
    'gridTemplateColumns',
    'gridTemplateRows',
    'hangingPunctuation',
    'height',
    'hyphens',
    'imageOrientation',
    'imageRendering',
    'isolation',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'left',
    'letterSpacing',
    'lineBreak',
    'lineHeight',
    'listStyle',
    'listStyleImage',
    'listStylePosition',
    'listStyleType',
    'margin',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'mask',
    'maskBorder',
    'maskBorderMode',
    'maskBorderOutset',
    'maskBorderRepeat',
    'maskBorderSlice',
    'maskBorderSource',
    'maskBorderWidth',
    'maskClip',
    'maskComposite',
    'maskImage',
    'maskMode',
    'maskOrigin',
    'maskPosition',
    'maskRepeat',
    'maskSize',
    'maskType',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'mixBlendMode',
    'objectFit',
    'objectPosition',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outlineOffset',
    'outlineStyle',
    'outlineWidth',
    'overflow',
    'overflowWrap',
    'overflowX',
    'overflowY',
    'padding',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'pageBreakAfter',
    'pageBreakBefore',
    'pageBreakInside',
    'pause',
    'pauseAfter',
    'pauseBefore',
    'perspective',
    'perspectiveOrigin',
    'placeContent',
    'placeItems',
    'placeSelf',
    'pointerEvents',
    'position',
    'quotes',
    'resize',
    'rest',
    'restAfter',
    'restBefore',
    'right',
    'rowGap',
    'scrollBehavior',
    'scrollMargin',
    'scrollMarginBlock',
    'scrollMarginBlockEnd',
    'scrollMarginBlockStart',
    'scrollMarginBottom',
    'scrollMarginInline',
    'scrollMarginInlineEnd',
    'scrollMarginInlineStart',
    'scrollMarginLeft',
    'scrollMarginRight',
    'scrollMarginTop',
    'scrollPadding',
    'scrollPaddingBlock',
    'scrollPaddingBlockEnd',
    'scrollPaddingBlockStart',
    'scrollPaddingBottom',
    'scrollPaddingInline',
    'scrollPaddingInlineEnd',
    'scrollPaddingInlineStart',
    'scrollPaddingLeft',
    'scrollPaddingRight',
    'scrollPaddingTop',
    'scrollSnapAlign',
    'scrollSnapStop',
    'scrollSnapType',
    'shapeImageThreshold',
    'shapeMargin',
    'shapeOutside',
    'speak',
    'speakAs',
    'tableLayout',
    'tabSize',
    'textAlign',
    'textAlignAll',
    'textAlignLast',
    'textCombineUpright',
    'textDecoration',
    'textDecorationLine',
    'textDecorationStyle',
    'textEmphasis',
    'textEmphasisPosition',
    'textEmphasisStyle',
    'textIndent',
    'textJustify',
    'textOrientation',
    'textOverflow',
    'textShadow',
    'textTransform',
    'textUnderlinePosition',
    'top',
    'transform',
    'transformBox',
    'transformOrigin',
    'transformStyle',
    'transition',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'unicodeBidi',
    'userSelect',
    'verticalAlign',
    'visibility',
    'voiceBalance',
    'voiceDuration',
    'voiceFamily',
    'voicePitch',
    'voiceRange',
    'voiceRate',
    'voiceStress',
    'voiceVolume',
    'whiteSpace',
    'widows',
    'width',
    'willChange',
    'wordBreak',
    'wordSpacing',
    'wordWrap',
    'writingMode'
  ]
};

export default cssProperties;