import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faGear } from '@fortawesome/free-solid-svg-icons';
import Switch from '../../components/switch/Switch';
import CardSwipe from '../../components/swipe/CardSwipe';

function MyPage() {
  const userInfo = (
    <UserInfoWrapper>
      <ProfileWrapper>
        <ProfileIcon icon={faCircleUser} />
        <LinkStyled to={'/profile/edit'}>
          <SettingWrapper>
            <SettingIcon icon={faGear} />
          </SettingWrapper>
        </LinkStyled>
      </ProfileWrapper>
      <Nickname>Lami</Nickname>
      <GenreWrapper />
      <PostedLink to={'/post-list'}>내가 작성한 게시글</PostedLink>
    </UserInfoWrapper>
  );

  const playList = (
    <PlayListWrapper>
      <Header>
        <Title>공개 플레이리스트 2개</Title>
        <Switch leftLabel={'비공개'} rightLabel={'공개'} />
      </Header>
      <CardSwipe />
    </PlayListWrapper>
  );

  return (
    <Wrapper>
      <FlexContainer>
        {userInfo}
        {playList}
      </FlexContainer>
    </Wrapper>
  );
}

export default MyPage;

const NAVY = ({ theme }) => theme.color.navy;
const THICK = ({ theme }) => theme.font.weight.thick;
const BOLD = ({ theme }) => theme.font.weight.bold;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
  padding-top: calc((100vh - 60px - 414px) / 2);
  align-items: flex-start;
`;

const FlexContainer = styled.div`
  ${FLEX_CENTER};
  justify-content: space-around;
  gap: 200px;
`;

const UserInfoWrapper = styled.div`
  width: 222px;
  height: fit-content;
  /* background-color: #bfe163; */
  ${FLEX_CENTER_COLUMN}
`;

const ProfileWrapper = styled.div`
  width: fit-content;
  height: 125px;
  /* background-color: red; */
`;

const ProfileIcon = styled(FontAwesomeIcon)`
  font-size: 125px;
`;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const SettingWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  position: relative;
  bottom: 30px;
  left: 95px;
  ${FLEX_CENTER_COLUMN};
  cursor: pointer;
`;

const SettingIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

const Nickname = styled.span`
  ${BOLD};
  color: ${NAVY};
  ${({ theme }) => theme.font.size[30]};
  margin-top: 30px;
  margin-bottom: 24px;
`;

const GenreWrapper = styled.div`
  width: 222px;
  height: 30px;
  background-color: ${NAVY};
`;

const PostedLink = styled(Link)`
  color: ${NAVY};
  text-decoration: none;
  ${THICK}
  margin-top: 20px;
`;

const PlayListWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  /* background-color: #94518b; */
`;

const Header = styled.div`
  ${FLEX_CENTER};
  gap: 213px;
`;

const Title = styled.span`
  ${BOLD}
  color: ${NAVY};
  ${({ theme }) => theme.font.size[20]};
`;
