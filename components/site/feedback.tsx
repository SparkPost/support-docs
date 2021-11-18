import React, { useState, useContext } from 'react';
import { Box, Button, Modal, useModal, Radio, TextField } from '@sparkpost/matchbox';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import { AlertsContext } from 'context/alerts';
import { track } from 'utils/segment';

const reasonList = [
  {
    label: "Didn't answer my question.",
    value: 'didnt-answer-question',
  },
  {
    label: 'Hard to understand.',
    value: 'hard-to-understand',
  },
  {
    label: 'Missing the information I need.',
    value: 'missing-information',
  },
  {
    label: 'Incorrect information.',
    value: 'incorrect-information',
  },
  {
    label: 'Other.',
    value: 'other',
  },
];

type ReasonType = {
  label: string;
  value: string;
};

const Feedback = (): JSX.Element => {
  const { getActivatorProps, getModalProps } = useModal();
  const [reason, setReason] = useState<ReasonType>();
  const [loadingPositive, setLoadingPositive] = useState<boolean | undefined>(undefined);
  const [loadingNegative, setLoadingNegative] = useState<boolean | undefined>(undefined);
  const { dispatch } = useContext(AlertsContext);
  const { asPath } = useRouter();
  const { onClose } = getModalProps();

  const handleChange = (reason: ReasonType) => {
    setReason(reason);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setReason({
      label: text,
      value: 'other',
    });
  };

  const createAlert = () => {
    // Adds delay to make the interaction seem less artificial
    setTimeout(() => {
      setLoadingPositive(undefined);
      setLoadingNegative(undefined);
      dispatch({
        type: 'addAlert',
        alert: {
          id: uuid(),
          title: 'Feedback submitted',
          status: 'success',
        },
      });
    }, 500);
  };

  const submitPositiveFeedback = () => {
    setLoadingPositive(true);
    track('User Feedback', {
      url: asPath,
      docs: asPath.includes('momentum') ? 'momentum' : 'support',
      helpful: true,
    });
    createAlert();
  };

  const submitNegativeFeedback = () => {
    setLoadingNegative(true);
    track('User Feedback', {
      url: asPath,
      docs: asPath.includes('momentum') ? 'momentum' : 'support',
      helpful: false,
      reason: reason?.label || '',
    });
    onClose();
    createAlert();
  };

  return (
    <Box px="500">
      <Box fontSize="500" lineHeight="500" fontWeight="semibold">
        Was this page helpful?
      </Box>
      <Box display="flex" mt="400">
        <Button
          variant="outline"
          loading={loadingPositive}
          color="blue"
          mr="300"
          onClick={submitPositiveFeedback}
        >
          Yes
        </Button>
        <Button variant="outline" color="blue" {...getActivatorProps()}>
          No
        </Button>
      </Box>
      <Modal {...getModalProps()} maxWidth="1150">
        <Modal.Header showCloseButton>What is the reason for your feedback?</Modal.Header>
        <Modal.Content>
          <Radio.Group label="Choose a reason" labelHidden>
            {reasonList.map((reason) => {
              return (
                <Radio
                  key={reason.value}
                  id={reason.value}
                  label={reason.label}
                  value={reason.value}
                  name="reason"
                  onChange={() => handleChange(reason)}
                />
              );
            })}
          </Radio.Group>
          {reason?.value === 'other' && (
            <TextField
              mt="300"
              id="other"
              multiline
              placeholder="Please share specific details about your feedback."
              onChange={handleTextChange}
            />
          )}
        </Modal.Content>
        <Modal.Footer>
          <Button color="blue" loading={loadingNegative} onClick={submitNegativeFeedback}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>
  );
};

export default Feedback;
