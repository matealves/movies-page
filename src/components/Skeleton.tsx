import { SkeletonArea } from "./SkeletonArea";
import { SkeletonItem } from "./SkeletonItem";

export const Skeleton = () => {
  const listSkeleton = [];
  for (let i = 0; i < 20; i++) {
    listSkeleton.push(
      <SkeletonItem>
        <div className="item"></div>
        <span></span>
      </SkeletonItem>
    );
  }

  return (
    <SkeletonArea>
      {listSkeleton.map((item, index) => {
        return <div key={index}> {item} </div>;
      })}
    </SkeletonArea>
  );
};
