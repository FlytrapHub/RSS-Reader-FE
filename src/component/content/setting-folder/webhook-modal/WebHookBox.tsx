import { Icon } from "../../../common/Icon";
import { Alert } from "../../../layout/sidebar/SideBarType";

type Props = {
  alert: Alert;
};

export default function WebHookBox({ alert }: Props) {
  return (
    <div className="h-12 flex items-center hover:bg-success rounded-lg">
      <div className="flex flex-none justify-center w-1/12 mx-3">
        <Icon name="folder" size="L" />
      </div>
      <div className="flex-1 w-full overflow-hidden whitespace-nowrap">
        <div className="text-lg text-left">{alert.webhookUrl}</div>
      </div>
      <div className="flex flex-none justify-center w-1/12">
        <Icon name="delete_left" size="L" />
      </div>
    </div>
  );
}
  