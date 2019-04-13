import React from 'react';
import LoadingWrapper from './style';

const Loading = (isend) => {
	const loadingText = isend ? '加载完成' : '加载中';
	return <LoadingWrapper className="loading">{loadingText}</LoadingWrapper>;
};

export default Loading;
