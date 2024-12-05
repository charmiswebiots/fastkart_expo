export const textRtlStyle = isRtl => (isRtl ? 'right' : 'left');

export const viewRtlStyle = isRtl => (isRtl ? 'row-reverse' : 'row');

export const imageRtlStyle = isRtl => ({
    transform: [{ scaleX: isRtl ? -1 : 1 }],
});

export const viewSelfRtlStyle = isRtl => (isRtl ? 'flex-start' : 'flex-end');