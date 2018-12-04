import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import classNames from 'classnames';
import {
  onboardingSteps,
  onboardingSteps2,
  stepDescriptions,
  stepDescriptions2,
} from 'app/views/onboarding/utils';
import ConfigStore from 'app/stores/configStore';

const ProgressNodes = createReactClass({
  displayName: 'ProgressNodes',

  propTypes: {
    params: PropTypes.object,
    showSurvey: PropTypes.bool,
  },

  contextTypes: {
    organization: PropTypes.object,
  },

  getSteps() {
    let organization = this.context.organization;

    return organization && organization.experiments.OnboardingSurveyExperiment === 1
      ? onboardingSteps2
      : onboardingSteps;
  },

  getStepDescriptions() {
    let {organization} = this.context;
    return organization && organization.experiments.OnboardingSurveyExperiment === 1
      ? stepDescriptions2
      : stepDescriptions;
  },

  inferStep() {
    let steps = this.getSteps();
    let {params, showSurvey} = this.props;

    if (!params.projectId && showSurvey) return steps.survey;
    if (!params.projectId) return steps.project;
    return steps.configure;
  },

  node(stepKey, stepIndex) {
    let nodeClass = classNames('node', {
      done: stepIndex < this.inferStep(),
      active: stepIndex === this.inferStep(),
    });

    let descriptions = this.getStepDescriptions();

    return (
      <div className={nodeClass} key={stepIndex}>
        <span className={nodeClass} />
        {descriptions[stepKey]}
      </div>
    );
  },

  render() {
    let config = ConfigStore.getConfig();
    let {slug} = this.context.organization;
    let steps = Object.keys(this.getSteps());

    return (
      <div className="onboarding-sidebar">
        <div className="sentry-flag">
          <span href="/" className="icon-sentry-logo-full" />
        </div>
        <div className="progress-nodes">{steps.map(this.node)}</div>
        <div className="stuck">
          <a
            href={
              !config.isOnPremise
                ? `/organizations/${slug}/support/`
                : 'https://forum.sentry.io/'
            }
          >
            <p> Stuck?</p>
            <p> Ask for help</p>
          </a>
        </div>
      </div>
    );
  },
});

export default ProgressNodes;
