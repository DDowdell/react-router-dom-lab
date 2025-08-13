import { Link } from 'react-router';

const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            {mailboxes.map((mailbox) => (
                <Link
                    key={mailbox._id}
                    to={`/mailboxes/${mailbox._id}`}
                    className="mail-box">
                    {mailbox._id}
                </Link>
            ))}
        </div>
    );
};

export default MailboxList;




