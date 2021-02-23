import { DesktopOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout, List, Rate, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Search from "../components/Search/Search";
import { selectOffers } from "../redux/Offers/Offers.slice";
import { selectIsSearching } from "../redux/Search/Search.slice";

const StyledLayout = styled(Layout)`
  && {
    display: flex;
    min-height: 100vh;
  }
`;
const StyledLogo = styled.div`
  display: flex;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
`;

const StyledContent = styled(Layout.Content)`
  display: flex;
  margin-top: 2rem;
  background-color: white;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  flex: 1;
`;

const IconText: React.FC<{ icon: React.FC; text: string | number }> = ({
  icon,
  text,
}) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Index: React.FC = () => {
  const offers = useSelector(selectOffers);
  const isSearching = useSelector(selectIsSearching);

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledLogo>Jobs</StyledLogo>
        <NavBar />
      </StyledHeader>
      <StyledContent>
        <Search />
        <List
          itemLayout="vertical"
          size="large"
          loading={isSearching}
          dataSource={offers}
          renderItem={({
            commonOfferId,
            logo,
            jobTitle,
            jobDescription,
            salary,
            remoteWork,
            employer,
          }) => (
            <List.Item
              key={commonOfferId}
              actions={[
                <IconText icon={MoneyCollectOutlined} text={salary} />,
                remoteWork ? (
                  <IconText
                    icon={DesktopOutlined}
                    text="Mozliwosc pracy zdalnej"
                  />
                ) : undefined,
              ]}
              extra={
                <Space direction="horizontal" size="middle">
                  <Rate value={0} allowClear />
                  <Button>Zaaplikuj</Button>
                </Space>
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={logo} />}
                title={jobTitle}
                description={employer}
              />
              {jobDescription}
            </List.Item>
          )}
        ></List>
      </StyledContent>
    </StyledLayout>
  );
};

export default Index;
