import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const ContentListWrapper = styled.div`
	.list-title{
		text-align: center;
		font-size: ${px2rem(16)};
		margin-top: ${px2rem(14)};
		margin-bottom: ${px2rem(5)};
	}
	.title-line{
		display: inline-block;
		border-bottom: ${px2rem(1)} solid #949494;
		height: ${px2rem(1)};
		width: ${px2rem(30)};
		margin-left: ${px2rem(4)};
		margin-right: ${px2rem(4)};
		margin-bottom: ${px2rem(5)};
	}
`;

export default ContentListWrapper;
